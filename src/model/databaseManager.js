const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;

const url="mongodb://localhost:27017";//数据库地址

function getDB(callback){
    mongoClient.connect(url, (err, client)=>{
        if (err) {
          console.log(err)
        }
        
        callback(err,client);
    });
}
exports.findOne=(collectionName,collectionCondition,callback)=>{
    getDB((err,client)=>{
        const db=client.db("students");
        const collection = db.collection(collectionName);//获取集合
        // 查询数据库。
        
        collection.find(collectionCondition,(err, docs)=>{
            console.log(docs)
            callback(err,docs)
            client.close()
        });
    })
}