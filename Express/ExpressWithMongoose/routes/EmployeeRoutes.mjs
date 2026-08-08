import express from 'express';
import { addEmployee, viewEmployee } from '../controller/EmployeeController.mjs';

const employeeRoute = express.Router();


employeeRoute.get('/viewEmployee',viewEmployee)
employeeRoute.post('/addEmployee',addEmployee)


export default employeeRoute;