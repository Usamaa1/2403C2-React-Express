import express from 'express'
import { parser } from '../cloudinaryConfig.mjs';
import { imageController } from '../controller/imageController.mjs';
// import { imageController } from '../controller/imageController.mjs';


const imageRouter = express.Router();

imageRouter.post('/imageUpload',parser.single('image'),imageController);

export default imageRouter;
