const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;

// 处理数据库id
const ObjectId = mongodb.ObjectId
exports.ObjectId = ObjectId

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
exports.find=(collectionName,collectionCondition,skipCount,limitCount,callback)=>{
    getDB((err,client)=>{
        const db=client.db("students");
        const collection = db.collection(collectionName);//获取集合
        // 查询
        collection.find(collectionCondition).skip(skipCount).limit(limitCount).toArray((err, arrayDocs)=>{
            callback(err,arrayDocs)
            client.close()
        });
    })
}
//查询符合条件的总个数
exports.getCount = (collectionName,collectionCondition,callback)=>{
    //1.获取到db对象
    getDB((err,client)=>{
        const db=client.db("students");
        const collection = db.collection(collectionName);//获取集合
        collection.find(collectionCondition).count((err,count)=>{
             if (err) {
              console.log(err)
             }
             callback(err,count)
             client.close();
        })
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
// 修改一条数据
exports.updateOne=(collectionName,collectionCondition,set,callback)=>{
    getDB((err,client)=>{
        const db=client.db("students");
        const collection = db.collection(collectionName);//获取集合
        // 查询
        collection.updateOne(collectionCondition,set,(err, doc)=>{
            callback(err,doc)
            client.close()
        });
    })
}
// 删除数据
exports.deleteOne=(collectionName,collectionCondition,callback)=>{
    getDB((err,client)=>{
        const db=client.db("students");
        const collection = db.collection(collectionName);//获取集合
        // 查询
        collection.deleteOne(collectionCondition,(err, doc)=>{
            callback(err,doc)
            client.close()
        });
    })
}