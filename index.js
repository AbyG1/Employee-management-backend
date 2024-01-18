//1 import express
const express = require('express')

//2 import cors 
const cors = require('cors')


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