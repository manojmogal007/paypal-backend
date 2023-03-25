const {connection}=require('./config/db')
const express=require('express')
const cors=require('cors')
const {sprintrouter}=require('./routes/sprint.route')
const {taskrouter}=require('./routes/task.route')

const port=8080

const app=express()
app.use(express.json())
app.use(cors())
app.use('/sprint',sprintrouter)
app.use('/task',taskrouter)


app.listen(8080,async()=>{
    try{
        await connection
        console.log('Server connected to database')
    }catch(err){
        console.log(err)
        console.log('Database connection error')
    }
    console.log(`Server started on port ${port}`)
})
