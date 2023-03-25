const mongoose=require('mongoose')


const connection=mongoose.connect('mongodb+srv://manojpatil:manojpatil@cluster0.rax4yc7.mongodb.net/?retryWrites=true&w=majority')

module.exports={connection}