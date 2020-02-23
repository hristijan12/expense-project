const express = require('express');
const proxy = require('http-proxy');


var api = express();
var apiProxy = proxy.createProxyServer();

api.all('/api/v1/auth/*', (req, res) => {
    console.log('Hit on path: /api/v1/auth/*')
    apiProxy.web(req, res, {target: 'http://localhost:8001'});
});

api.all('/api/v1/products/*', (req, res) => {
    console.log('Hit on path: /api/v1/products/*')
    apiProxy.web(req, res, {target: 'http://localhost:8000'});
});

api.all('/*', (req, res) => {
    apiProxy.web(req, res, {target: 'http://localhost:8002'});
});

api.listen(process.env.PORT, err => {
    if(err){
        console.log('could not start server');
        console.log(err);
        return;
    }
    
    console.log('server started successfully');
});