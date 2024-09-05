import { Router } from "express";
import verificationEmailController from "./verificationEmail.controller";
import userExists, { loginUserExists } from './../../middleware/user/register';

const verificationRouter = Router();

verificationRouter.post("/emailverify",userExists,verificationEmailController.sendCode)
verificationRouter.post("/register",verificationEmailController.registration);
verificationRouter.post("/passwordcode",loginUserExists,verificationEmailController.sendCode)
verificationRouter.put("/updatedata", verificationEmailController.updateData);

export default verificationRouter
