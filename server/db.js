const { MongoClient } = require("mongodb");

const URI =
  "mongodb+srv://vinujithmin:vinublog@cluster1.pr2hj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";

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
