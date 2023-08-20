const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://mduddukuru:Karthik0311___K@cluster0.6zckm3g.mongodb.net/?retryWrites=true&w=majority";


const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

client.connect()

module.exports = client;