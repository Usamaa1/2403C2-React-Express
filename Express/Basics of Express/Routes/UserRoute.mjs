import express from 'express';
import { userFunc } from '../controller/userController.mjs';

const userRoute = express.Router();


userRoute.get('/user',userFunc)


export default userRoute;