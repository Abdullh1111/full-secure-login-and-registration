import { Router } from "express";
import verificationEmailController from "./verificationEmail.controller";
import userExists from './../../middleware/user/register';

const verificationRouter = Router();

verificationRouter.post("/emailverify",userExists,verificationEmailController.sendCode)
verificationRouter.post("/register",verificationEmailController.registration);

export default verificationRouter
