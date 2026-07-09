import express from 'express';
import { mailController } from '../controller/mailController.mjs';


const mailRouter = express.Router();




mailRouter.post('/sendMail',mailController)


export default mailRouter;


