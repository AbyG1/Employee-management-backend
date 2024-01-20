//1 import express
const express = require('express')

//2 import cors 
const cors = require('cors')


//import logic
const  logic = require('./services/logic')

// 3 create a backend application using express
const emsServer = express()


//4 connect frontend
emsServer.use(cors({
   origin:'http://localhost:3000'
}))

//5 Convert the json data to js and js to json using json()  function

emsServer.use(express.json())


//6 Define the port number

emsServer.listen(8000,()=>{
    console.log('Ems server listening on the port 8000')
})

//Api call for all employees details
emsServer.get('/get-all-employees',(req,res)=>{
    logic.getAllEmployees().then((response) => {
        //respons - all employees details
        res.status(response.statusCode).json(response);
    })
})


//Api call to add an employee
emsServer.post('/add-an-employee',(req,res)=>{
    logic.addEmployee(req.body.id,req.body.name,req.body.age,req.body.designation,req.body.salary).then((response => {
        res.status(response.statusCode).json(response)
    }))
})

//Api call for deleting an employee

emsServer.delete('/delete-an-employee/:id',(req,res) => {
    logic.deleteEmployee(req.params.id).then
    ((response) => {
        res.status(response.statusCode).json
        (response);
    })
})


//Api call for get an employee details
emsServer.get('/get-an-employee/:id',(req,res)=>{
    logic.getAnEmployee(req.params.id).then((response) => {
        //respons - an employees detail
        res.status(response.statusCode).json(response);
    })
})