const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;

const url="mongodb://localhost:27017";//数据库地址

// 封装获取db对象
function getDB(callback){
    mongoClient.connect(url, (err, client)=>{
        if (err) {
          console.log(err)
        }
        callback(err,client);
    });
}
// 查询一条数据
exports.findOne=(collectionName,collectionCondition,callback)=>{
    getDB((err,client)=>{
        const db=client.db("students");
        const collection = db.collection(collectionName);//获取集合
        // 查询
        collection.findOne(collectionCondition,(err, doc)=>{
            callback(err,doc)
            client.close()
        });
    })
}

// 查询多条数据
exports.find=(collectionName,collectionCondition,callback)=>{
    getDB((err,client)=>{
        const db=client.db("students");
        const collection = db.collection(collectionName);//获取集合
        // 查询
        collection.find(collectionCondition).toArray((err, arrayDocs)=>{
            callback(err,arrayDocs)
            client.close()
        });
    })
}

// 插入一条数据
exports.insertOne=(collectionName,collectionCondition,callback)=>{
    getDB((err,client)=>{
        const db=client.db("students");
        const collection = db.collection(collectionName);//获取集合
        // 查询
        collection.insertOne(collectionCondition,(err, doc)=>{
            callback(err,doc)
            client.close()
        });
    })
}