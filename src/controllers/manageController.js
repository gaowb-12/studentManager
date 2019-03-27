const path = require("path")
const database=require("../model/databaseManager")

// 获取学生列表
exports.getStudentListPage=(req,res)=>{
    // 获取当前页
    const currentPageIndex=parseInt(req.query.currentPageIndex)||0;
    // 每页的数据条数
    const everyPageCount=parseInt(req.query.everyPageCount)||4;
    // 获取搜索关键字
    const keyword=req.query.keyword||"";

    // 获取总条数
    database.getCount("studentInfos",{name:{$regex:keyword}},(err,count)=>{
        // 跳过多少条数据
        const skipCount=currentPageIndex*everyPageCount;
        // 计算有多少页
        const totalPage=count%everyPageCount>0?parseInt(count/everyPageCount)+1:count/everyPageCount
        // 页数变成数组
        const totalPageArray=[];
        for(var i =0;i<totalPage;i++){
            totalPageArray.push(i);
          }
          
        // 返回当前页的结果
        database.find("studentInfos",{name:{$regex:keyword}},skipCount,everyPageCount,(err,docs)=>{
            if(err){
                console.log(err)
            }
            res.render('parent', {keyword,totalPage,totalPageArray,currentPageIndex,list: docs});
        })
    })
}