const mongoose=require('mongoose')

const sprintSchema = mongoose.Schema({
    name: String,
    startDate: Date,
    endDate: Date,
    });
  
  const Sprintmodel = mongoose.model('Sprint', sprintSchema);

  module.exports={Sprintmodel}