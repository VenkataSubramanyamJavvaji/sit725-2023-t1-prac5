let collection = require('../models/monkey');

const postMonkey = (req,res) => {
    let monkey = req.body;
    collection.postMonkey(monkey, (err,result) => {
        if (!err) {
            res.json({statusCode:201,data:result,message:'success'});
        }
    });
}

const getAllMonkeys = (req,res) => {
    collection.getAllMonkeys((error,result)=>{
        if (!error) {
            res.json({statusCode:200,data:result,message:'success'});
        }
    });
}

const deleteMonkey = (req,res) => {
    let monkey = req.body;
    collection.deleteOne(monkey, (err,result) => {
        if (!err) {
            res.json({statusCode:201,data:result,message:'success'});
        }
    });
}

module.exports = {postMonkey,getAllMonkeys}