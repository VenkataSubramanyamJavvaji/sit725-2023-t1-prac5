let express = require('express');
let router = express.Router();
let controller = require('../controllers/controller');

router.post('/', function(req,res){
    controller.postMonkey(req,res);
});

router.get('/', (req,res)=>{
    controller.getAllMonkeys(req,res);
});

router.delete('/', (req,res)=>{
    controller.getAllMonkeys(req,res);
});


module.exports = router;