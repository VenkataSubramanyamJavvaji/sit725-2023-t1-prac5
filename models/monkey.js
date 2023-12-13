let client = require('../dbConnection');

let collection = client.db().collection('Monkeys');

function postMonkey(monkey, callback) {
    collection.insertOne(monkey,callback);
}

function getAllMonkeys(callback) {
    collection.find({}).toArray(callback);
}

module.exports = {postMonkey,getAllMonkeys}