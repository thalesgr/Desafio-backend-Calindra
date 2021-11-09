const connection = require('./connection');

const getAll = async () => connection().then((db) => db.collection('endereços').find().toArray());

const create = async (data) => connection().then((db) => db.collection('endereços').insertOne(data));

module.exports = {
    getAll,
    create,
};
