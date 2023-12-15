const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://test:test123@cluster0.fkkchvh.mongodb.net/";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

client.connect();

module.exports = client;