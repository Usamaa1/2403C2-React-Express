import express from 'express';
import { login, signup } from '../controller/authController.mjs';

const userRoute = express.Router();


userRoute.post('/login',login)
userRoute.post('/signup',signup)


export default userRoute;