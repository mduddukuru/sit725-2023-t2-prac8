let express = require('express');
let route = express.Router();
let controller = require('../controller/controller');

route.post('/', function (req, res){
    controller.postCat(req, res);
   
})



route.get('/', (req,res) => {
   controller.getAllCats(req,res);
})



module.exports = route;