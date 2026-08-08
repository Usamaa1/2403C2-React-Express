import express from 'express';
import { addPost, viewPost } from '../controller/PostController.mjs';

const postRoute = express.Router();


postRoute.get('/viewPost',viewPost)
postRoute.post('/addPost',addPost)


export default postRoute;