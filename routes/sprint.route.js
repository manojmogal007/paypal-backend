const express=require('express')
const {Sprintmodel}=require('../models/sprint.model')

const sprintrouter=express.Router()

sprintrouter.get('/',async(req,res)=>{
    try{
        const sprints=await Sprintmodel.find()
        res.send({'msg':'All sprint',sprints})
    }catch(err){
        console.log(err)
        res.send({'msg':'Error'})
    }
})

sprintrouter.post('/addsprint',async(req,res)=>{
    const sprint=req.body
    try{
        const new_sprint=new Sprintmodel(sprint)
        await new_sprint.save()
        res.send({'msg':'Sprint added'})
    }catch(err){
        console.log(err)
        res.send({'msg':'Error while adding sprint'})
    }
})



module.exports={sprintrouter}