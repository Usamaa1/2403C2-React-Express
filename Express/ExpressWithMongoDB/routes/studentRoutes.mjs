import express from 'express';
import { addStudent, deleteStudent, filterStudent, getStudent, searchStudent, updateStudent } from '../controller/studentController.mjs';

const studentRouter = express.Router();


studentRouter.post('/add',addStudent);
studentRouter.get('/get',getStudent);
studentRouter.delete('/delete/:id',deleteStudent);
studentRouter.put('/update/:id',updateStudent);
studentRouter.get('/search',searchStudent);
studentRouter.get('/filter',filterStudent);


export default studentRouter;