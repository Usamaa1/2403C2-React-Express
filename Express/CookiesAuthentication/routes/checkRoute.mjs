import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.mjs";
import { checkController } from "../controller/checkController.mjs";

const checkRouter = express.Router();



checkRouter.get('/check',authMiddleware,checkController)


export default checkRouter;




