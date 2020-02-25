const express = require('express');
const bodyParser = require('body-parser');
var jwt = require('express-jwt');
const config = require('../config/index.js');
const db = require('../db/connection');
const auth = require('../handlers/auth');
const path = require('path');
var cors = require('cors');


db.init(config.getConfig('db'));

var api = express();

var pub = path.join(__dirname, '..', 'public');
api.use('/public', express.static(pub));

api.use(bodyParser.json());
api.use(cors());
api.use(
    jwt(
        {secret: config.getConfig('jwt').key}
    )
    .unless(
    {path: ['/api/v1/auth/register', '/api/v1/auth/login', '/public']}
    )
);

api.post('/api/v1/auth/register', auth.register);
api.post('/api/v1/auth/login', auth.login);

api.listen(8001, err => {
    if(err){
        console.log('Could not start server');
        console.log(err);
        return;
    }
    console.log('Server successfully started on port 8001');
});
