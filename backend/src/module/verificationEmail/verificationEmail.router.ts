import { Router } from "express";
import verificationEmailController from "./verificationEmail.controller";

const verificationRouter = Router();

verificationRouter.post("/sendcode",verificationEmailController.sendCode)
verificationRouter.post("/register",verificationEmailController.registration);

export default verificationRouter
