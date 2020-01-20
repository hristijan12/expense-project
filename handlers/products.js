const mProducts = require('../models/products');

const getAll = (req, res) => {

    console.log(req.query);
    let q = {};
    let sort = {};


    if(req.query.date_from != undefined) {
        if(q.date == undefined){
            q.date = {};
        }
        q.date.$gte = new Date(Number(req.query.date_from));
    }

    if(req.query.date_to != undefined) {
        if(q.date == undefined){
            q.date = {};
        }
        q.date.$lt = new Date(Number(req.query.date_to));
    }

    if(req.query.sort != undefined) {
        let sortable = ['date', 'price'];
        let sq = req.query.sort.split(":");
        if(sortable.indexOf(sq[0]) > -1){
            sort[sq[0]] = sq[1] == 'desc' ? -1 : 1;
          
        }
    }

    mProducts.getAll(q, sort)
    .then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
        res.status(500).send(err);
    });
}

const getOne = (req, res) => {
    mProducts.getOne(req.params.id, req.user.id)
    .then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
        res.status(500).send(err);
    });
}

const save = (req, res) => {
    var product = req.body;
    let er = 0;
    if(product.name == undefined || product.name.length == 0){er++;}
    if(product.type == undefined || product.type.length == 0){er++;}
    if(product.description == undefined || product.description.length == 0){er++;}
    if(product.date == undefined || product.date.length == 0){er++;}
    if(product.price == undefined || product.price.length == 0){er++;}

    if(er == 0){
        mProducts.save({...product, user_id: req.user.id})
        .then(() => {
            res.status(201).send('Created');
        })
        .catch(err => {
            res.status(500).send(err);
        });
    } else {
        res.status(400).send('Bad request');
    }
}

const replace = (req, res) => {
    var product = req.body;
    let er = 0;
    if(product.name == undefined || product.name.length == 0){er++;}
    if(product.type == undefined || product.type.length == 0){er++;}
    if(product.description == undefined || product.description.length == 0){er++;}
    if(product.date == undefined || product.date.length == 0){er++;}
    if(product.price == undefined || product.price.length == 0){er++;}

    if(er == 0){
        mProducts.replace(req.params.id, product)
        .then(() => {
            res.status(204).send();
        })
        .catch(err => {
            res.status(500).send(err);
        });
    } else {
        res.status(400).send('Bad Request');
    }
}

const update = (req, res) => {
    var product = req.body;
    mProducts.replace(req.params.id, product)
    .then(() => {
        res.status(204).send();
    })
    .catch(err => {
        res.status(500).send(err);
    });
}

const remove = (req, res) => {
    mProducts.remove(req.params.id)
    .then(() => {
        res.status(204).send();
    })
    .catch(err => {
        res.status(500).send(err);
    });
}

module.exports = {
    getAll,
    getOne,
    save,
    replace,
    update,
    remove
}