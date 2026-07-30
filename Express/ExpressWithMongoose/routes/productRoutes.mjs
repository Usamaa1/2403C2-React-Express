import express from 'express';
import  { addProduct, viewProduct } from '../controller/ProductController.mjs';

const productRoute = express.Router();


productRoute.get('/viewProduct',viewProduct)
productRoute.post('/addProduct',addProduct)


export default productRoute;