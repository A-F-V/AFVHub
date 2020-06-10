
const MongoClient = require('mongodb').MongoClient;


const uri = 'mongodb+srv://AFV:ENErNEuMBOuTENtro@afvcluster-3qu3p.mongodb.net/?retryWrites=true&w=majority';

async function main() {
  const client = new MongoClient(uri);
  await client.connect({ useUnifiedTopology: true, useNewUrlParser: true });
  const admin = client.db().admin();
  console.log(await admin.listDatabases());
  console.log(await admin.serverStatus());
}
exports.main = main;
