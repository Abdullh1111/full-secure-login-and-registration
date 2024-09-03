import { Router } from "express";
import verificationEmailController from "./verificationEmail.controller";

const verificationRouter = Router();

verificationRouter.post("/sendcode",verificationEmailController.sendCode)

export default verificationRouter
