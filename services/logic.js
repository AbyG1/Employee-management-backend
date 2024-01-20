//Backend logics

//import db.js file

const db = require('./db')

//get all the employees details from the database

const getAllEmployees = () => {
    return db.employee.find().then((result) => {//result - details of employee
        if(result){
            return {
                statusCode:200,
                employees:result
            }
        } else {

            return{
                statusCode:404,
                message:'cant find employee'
            }

        }

    })

}

//Add a new employee deatils into the database

const addEmployee = (id,name,age,designation,salary) => {
    return db.employee.findOne({id}).then((result) => {
        if(result){
            return{
                statusCode: 404,
                message:"Employee already exists"
            }

        }
        else{//The id is not in the database then save it it database
                const newEmployee = new db.employee({id,name,age,designation,salary})
                newEmployee.save()
                return{
                    statusCode: 200,
                    message:'Employee added successfully'
                }
        }

        }
    )
}


//delete an employee
const deleteEmployee = (id) => {
    return db.employee.deleteOne({id}).then((result) => {
            return{
                statusCode:200,
                message:"Employee deleted successfully"
            }
    }
    )
    .catch((error) => {
        return{
            statuscode:401,
            message:"Couldn't find employee"
        }
    })

}

//get a particular employee from database

const getAnEmployee = (id) => {
    return db.employee.findOne({id}).then((result) => {//result - details of an employee
        if(result){
            return {
                statusCode:200,
                employees:result
            }
        } else {

            return{
                statusCode:404,
                message:'cant find employee'
            }

        }

    })



}


//edit - update an employee details
const updateAnEmployee=(id,name,age,designation,salary)=>{//updated data
    return db.employee.findOne({id}).then((result)=>{//result - details of employees
        if(result){
            //assiging updated information to the database values
            result.id = id;
            result.name = name;
            result.age = age;
            result.designation = designation;
            result.salary = salary

            //save updated details into db
            result.save()
            
                return {//send to frontend
                    statusCode:200,
                    message:"Employee data updated successfully"
                }
        }
        else{
                return {
                    statusCode:404,
                    message:'cant find employee'
                }
        }
    })
}
module.exports = {
    getAllEmployees,
    addEmployee,
    deleteEmployee,
    getAnEmployee,
    updateAnEmployee
}
    





module.exports = {
    getAllEmployees,
    addEmployee,
    deleteEmployee,
    getAnEmployee,
    updateAnEmployee
}