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
            res.render('parent', {template:"list",list: docs,keyword,username:req.session.username,totalPage,totalPageArray,currentPageIndex});
        })
    })
}
// 获取新增学生页面
exports.getAddStudentPage=(req,res)=>{
    res.render('parent',{template:"add",username:req.session.username})
}
// 增加学生信息
exports.addStudentInfo=(req,res)=>{
    const studentInfo={
        ...req.body
    }
    database.insertOne("studentInfos",studentInfo,(err,doc)=>{
        res.setHeader("Content-Type","text/html;charset=utf8;")
        if (doc!=null) {
            res.end("<script>window.location.href='/studentmanager/list?everyPageCount=4&currentPageIndex=0'</script>");
        }else{
            res.end("<script>alert('新增失败');</script>")
        }
    })
}
// 获取编辑页面
exports.getEditStudentPage=(req,res)=>{
    const _id= req.params.id
    database.findOne("studentInfos",{_id:database.ObjectId(_id)},(err,doc)=>{
        res.render('parent',{template:"edit",studentInfo:{...doc},username:req.session.username})
    })
}
// 编辑学生信息
exports.editStudentInfo=(req,res)=>{
    const _id= req.params.id;
    req.body.age=parseInt(req.body.age)
    const studentInfos={
        ...req.body
    }
    database.updateOne("studentInfos",{_id:database.ObjectId(_id)},{$set:studentInfos},(err,doc)=>{
        res.setHeader("Content-Type","text/html;charset=utf8;")
        if (doc!=null) {
            res.end("<script>window.location.href='/studentmanager/list?everyPageCount=4&currentPageIndex=0';alert('保存成功');</script>");
        }else{
            res.end("<script>alert('新增失败');</script>")
        }
    })
}
// 删除学生信息
exports.deleteStudentInfo=(req,res)=>{
    const result={status:1,message:"删除成功！"}
    const _id= req.params.id;
    database.deleteOne("studentInfos",{_id:database.ObjectId(_id)},(err,doc)=>{
        if (!doc) {
            result.status=0;
            result.message="删除失败！"
        }
        res.json(result)
    })
}