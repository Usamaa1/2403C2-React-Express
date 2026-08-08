import express from 'express';
import { addOrder, viewOrder } from '../controller/OrderController.mjs';


const orderRoute = express.Router();


orderRoute.get('/viewOrder',viewOrder)
orderRoute.post('/addOrder',addOrder)


export default orderRoute;