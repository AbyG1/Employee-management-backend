//connection code of node and mongodb

//import mongoose

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/EMS')


//modal creation
const employee = mongoose.model('employee',{
    id:String,
    name:String,
    age:String,
    designation:String,
    salary:String
})


module.exports = {
    employee
}