const mUsers = require('../models/users');
const vUsers = require('../validators/users');
var validator = require('node-input-validator');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const config = require('../config/index.js');
const randomstring = require('randomstring');
const sgMail = require('@sendgrid/mail');

const register = (req, res) => {
    var v = new validator.Validator(req.body, vUsers.createUser);
    v.check()
    .then(matched => {
        if(matched) {
            // get user by email
            return mUsers.getUserPasswordByEmail(req.body.email)
            .then((ed) => {
                console.log(ed);
                if(!ed) {
                    bcrypt.genSalt(10, function(err, salt) {
                        if(err){
                            throw new Error(err);
                            return;
                        }
                        bcrypt.hash(req.body.password, salt, function(err, hash) {
                            if(err){
                                throw new Error(err);
                                return;
                            }
                            var confirm_hash = randomstring.generate({
                                length: 30,
                                charset: 'alphanumeric'
                            });
                            mUsers.createUser({
                                ...req.body, 
                                password: hash,
                                confirm_hash: confirm_hash,
                                confirmed: false
                            });
                            sgMail.setApiKey(config.getConfig('mailer').key);
                            const msg = {
                                to: req.body.email,
                                from: 'bojang@gmail.com',
                                subject: 'Thanks for registering',
                                text: 'Thanks for registering',
                                html: `<a href="http://localhost:8001/api/v1/confirm/${confirm_hash}">Click here to confirm your account</a>`,
                            };
                            sgMail.send(msg);
                            return;
                        });
                    });
                } else {
                    throw new Error('Bad Request - User Exists');
                }
            })
            .catch(err => {
                throw new Error(err);
            });
        } else {
            throw new Error('Validation failed');
        }
    })
    .then(() => {
        return res.status(201).send('ok');
    })
    .catch(err => {
        console.log(err);
        return res.status(500).send(v.errors);
    });
}

const login = (req, res) => {
    mUsers.getUserPasswordByEmail(req.body.email)
    .then((data) => {
        bcrypt.compare(req.body.password, data.password, function(err, rez) {
            if(err){
                return res.status(500).send('Could not compare password');
            }
            if(rez){
                var tokenData = {
                    id: data._id,
                    full_name: `${data.first_name} ${data.last_name}`,
                    email: data.email
                };
                var token = jwt.sign(tokenData, config.getConfig('jwt').key);
                return res.status(200).send({jwt: token});
            }
            return res.status(404).send('not found');
        });
    })
    .catch(err => {
        console.log(err);
        return res.status(500).send('Could not get user');
    });
};

module.exports = {
    register,
    login
}