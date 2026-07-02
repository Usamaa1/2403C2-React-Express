import { ObjectId } from "mongodb";
import { db } from "../connection/connection.mjs";

export const addStudent = async (req, res) => {
    try {

        const { studentName, studentEmail, studentPhone } = req.body;

        db.collection('student').insertOne({ studentName, studentEmail, studentPhone });

        res.send({ successMessage: "Student added successfully" });


    } catch (error) {
        console.log(error);
        res.send({ errorMessage: error });
    }
}



export const getStudent = async (req, res) => {
    try {

        const students = await db.collection('student').find().toArray();
        res.send(students);




    } catch (error) {
        console.log(error);
        res.send({ errorMessage: error });
    }
}




export const deleteStudent = async (req, res) => {


    try {

        const { id } = req.params;

        console.log(id)

        const stdDelete = await db.collection('student').deleteOne({ _id: new ObjectId(id) });

        if (stdDelete.deletedCount == 0) {

            res.send({ errorMessage: "Student not found" });
        }
        else {
            res.send({ successMessage: "Student Deleted successfully" });

        }



    } catch (error) {
        console.log(error);
        res.send({ errorMessage: error });
    }
}


export const updateStudent = async (req, res) => {


    try {

        const { id } = req.params;

        const { studentName, studentEmail, studentPhone } = req.body;

        await db.collection('student').updateOne({ _id: new ObjectId(id) }, { $set: { studentName, studentEmail, studentPhone } });

        res.send({ successMessage: "Student updated successfully" });



    } catch (error) {
        console.log(error);
        res.send({ errorMessage: error });
    }

}



export const searchStudent = async (req, res) => {

    try {

      let { searchQuery } = req.body;

      const searchedData = await db.collection('student').find({ studentName: { $regex: searchQuery } }).toArray();

      console.log(searchedData)
        res.send(searchedData);

    } catch (error) {
        console.log(error);
        res.send({ errorMessage: error });
    }
}



export const filterStudent = async (req,res)=>{
    try {
        
        const {minAge, maxAge} = req.body;


        const filteredData = await db.collection('student').find({age: {$gte: minAge, $lte: maxAge}}).toArray();

        console.log(filteredData)
        res.send(filteredData)




    } catch (error) {
        console.log(error);
        res.send({ errorMessage: error });
    }
}








