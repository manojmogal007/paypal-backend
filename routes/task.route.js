const express=require('express')
const {Taskmodel}=require('../models/task.model')


const taskrouter=express.Router()

taskrouter.get('/:id',async(req,res)=>{
    const {id}=req.params
    try{
        const sprint_task=await Taskmodel.find({sprint_id:id})
        res.send({'msg':'All tasks of given sprint',sprint_task})
    }catch(err){
        console.log(err)
        res.send({'msg':'Error while getting tasks'})
    }
})

taskrouter.post('/addtask',async(req,res)=>{
    const task=req.body
    try{
        const new_task=new Taskmodel(task)
        await new_task.save()
        res.send({'msg':'Task added successfully'})
    }catch(err){
        console.log(err)
        res.send({'msg':'Error wile adding task'})
    }
})

taskrouter.patch('/updatetask/:id',async(req,res)=>{
        const {id}=req.params
    try{
        await Taskmodel.findByIdAndUpdate({_id:id},req.body)
        res.send({'msg':'Task updated'})
    }catch(err){
        console.log(err)
        res.send({'msg':'Error while updating task'})
    }
})

module.exports={taskrouter}