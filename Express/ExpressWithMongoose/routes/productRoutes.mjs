import express from 'express';
import { parser } from '../cloudinaryConfig.mjs';
import  { addProduct, viewProduct } from '../controller/ProductController.mjs';

const productRoute = express.Router();


productRoute.get('/viewProduct',viewProduct)
productRoute.post('/addProduct',parser.single('image'),addProduct)


export default productRoute;