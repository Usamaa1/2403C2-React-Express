import Employees from "../models/Employee.mjs";

export const addEmployee = async (req,res)=>{
    try {

        await Employees.insertOne(req.body);
        res.send({successMessage: "Employee Added successfully!"})

    } catch (error) {
        // console.log(error);
        
        // console.log("console error",error)

        // console.log(Object.keys(error.errors))

        let errArray = Object.keys(error.errors);

        // errArray.map(item => error.errors[item].message);
       
        

        res.send({errorMessage: errArray.map(item => error.errors[item].message)})

    }
}
export const viewEmployee = async (req,res)=>{
    try {
        res.send(await Employees.find())

    } catch (error) {
        console.log(error);
        res.send({errorMessage: error})
    }
}