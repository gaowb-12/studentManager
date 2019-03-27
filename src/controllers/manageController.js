const path = require("path")
const database=require("../model/databaseManager")

list=[{name:"gao",age:18,sex:"男",phone:"1321056586"},{name:"gao",age:18,sex:"男",phone:"1321056586"}]

exports.getStudentListPage=(req,res)=>{
    let list;
    database.find("studentInfos",{},(err,docs)=>{
        if(err){
            console.log(err)
        }
        list=docs
        console.log(docs)
        res.render('parent', {list: list});
    })
}