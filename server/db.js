const { MongoClient } = require("mongodb");

const URI = process.env.MONGO_URI;

let dbConnection;

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(URI)
      .then((client) => {
        dbConnection = client.db("sample_mflix");
        return cb();
      })
      .catch((err) => {
        console.log(err);
        cb(err);
      });
  },
  getDb: () => dbConnection,
};
