const mongoose=require('mongoose')


const taskSchema=mongoose.Schema({
    name: String,
    assignee: String,
    type: { type: String, enum: ['bug', 'feature', 'story'] },
    status: { type: String, enum: ['to do', 'in progress', 'done'] },
    sprint_id:String
})

const Taskmodel=mongoose.model('task',taskSchema)

module.exports={Taskmodel}