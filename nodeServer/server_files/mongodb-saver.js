let MongoClient = require('mongodb').MongoClient;
const DB_NAME = "ojt";
const MONGO_URI = "mongodb+srv://ojt:ojt@cluster0-2mzpd.mongodb.net/test?retryWrites=true&w=majority";

class mongoSaver {
    constructor(uri) {
        this.client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    }

    resetAndSave(key, data) {
        return this.client.connect().then(() => {
            const collection = this.client.db(DB_NAME).collection(key);
            collection.removeMany({},function(err, removed){if(err) throw err;});
            collection.insertMany(data);
        });
    }

    addNewItem(key, item) {
        return this.client.connect().then(() => {
            const collection = this.client.db(DB_NAME).collection(key);
            collection.insertOne(item);
        });
    }

    updateItem(key, item) {
        return this.client.connect().then(() => {
            const collection = this.client.db(DB_NAME).collection(key);
            collection.updateOne(
                {"_id": item._id}, 
                { $set: item }
            );
        });
    }

    deleteItem(key, item) {
        return this.client.connect().then(() => {
            const collection = this.client.db(DB_NAME).collection(key);
            collection.deleteOne({"_id": item._id});
        });
    }

    restore(key) {
        return this.client.connect().then(() => {
            const collection = this.client.db(DB_NAME).collection(key);
            let items = collection.find().toArray();
            return items;
        });
    }
}

module.exports = new mongoSaver(MONGO_URI);