/**
 *面向mongodb及控制器写代码
 *
 */

//导入数据库相关包
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient

const ObjectId = mongodb.ObjectId
exports.ObjectId = ObjectId

var url = 'mongodb://localhost:27017/bjqd22';

function getDB(callback){
    MongoClient.connect(url, function(err, db) {
          if (err) {
            console.log(err)
          }
         callback(err,db);
    });
}

//查询一个的公用方法
exports.findOne = (collectionName,collectionCondition,callback)=>{
   //1.获取到db对象
   getDB((err,db)=>{
      //2.根据控制器传递过来的collectionName,collectionCondition 做事
      db.collection(collectionName).findOne(collectionCondition,(err,doc)=>{
          if (err) {
            console.log(err)
          }
          //将结果传递给调用我们databasemanager的控制器
          callback(err,doc)

          db.close();
      })
   })
}

//查询多个的公用方法
exports.findMany = (collectionName,collectionCondition,skipCount,limitCount,callback)=>{
  //1.获取到db对象
  getDB((err,db)=>{
      db.collection(collectionName).find(collectionCondition).skip(skipCount).limit(limitCount).toArray((err,docs)=>{
        if (err) {
          console.log(err)
        }
        callback(err,docs)

        db.close();
      })
  })
}

//查询符合条件的总个数
exports.getCount = (collectionName,collectionCondition,callback)=>{
  //1.获取到db对象
  getDB((err,db)=>{
      db.collection(collectionName).count(collectionCondition,(err,count)=>{
           if (err) {
            console.log(err)
           }
           callback(err,count)

           db.close();
      })
  })
}

//新增一条文档的公用方法
exports.insertOne = (collectionName,collectionCondition,callback)=>{
   //1.获取到db对象
  getDB((err,db)=>{
      db.collection(collectionName).insertOne(collectionCondition,(err,doc)=>{
        if (err) {
          console.log(err)
        }

        callback(err,doc)
      })

      db.close();
  })
}

//修改一条文档
exports.updateOne = (collectionName,collectionCondition,collectionData,callback)=>{
  //1.获取到db对象
  getDB((err,db)=>{
     db.collection(collectionName).updateOne(collectionCondition,{ $set: collectionData },(err,doc)=>{
      if (err) {
            console.log(err)
      }

      callback(err,doc);

      db.close();
   })
  })
}

//删除一条文档
exports.deleteOne = (collectionName,collectionCondition,callback)=>{
  //1.获取到db对象
  getDB((err,db)=>{
      db.collection(collectionName).deleteOne(collectionCondition,(err,doc)=>{
           if (err) {
                console.log(err)
          }

          callback(err,doc);

          //关闭数据库
          db.close();
      })
  })
}
