const testDBConnection = function testDBConnection() {
  const MongoClient = require('mongodb').MongoClient,
        assert = require('assert'),
        // Connection URL
        url = 'mongodb://localhost:27017/app',
        message = "Connected successfully to MongoDB server.";
  // Use connect method to connect to the server
  MongoClient.connect(url, function(err, db){
     assert.equal(null, err);
     db.close();
  });
  return message 
};

module.exports = testDBConnection
