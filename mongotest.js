var mongoClient = require("mongodb").MongoClient;
mongoClient.connect("mongodb://mjfbin:Upq3OVnkIREwMGH8HxgNl62RIy5PSeDwZP9HNKmXrL2JNiFVKmVkPCIrIygKyNsKw7MYNU0ZSqPwAyHDNYDkPA==@mjfbin.documents.azure.com:10255/?ssl=true", function (err, db) {
  db.close();
});