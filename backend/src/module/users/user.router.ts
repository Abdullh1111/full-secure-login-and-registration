import { Router } from "express";
import userController from "./user.controller";
import authUser from "../../middleware/authentiication";
import userExists from "../../middleware/user/register";

const userRouter = Router();

userRouter.post("/login", userController.login);
userRouter.get("/logout", userController.logout);
userRouter.get("/getuserdata",userExists, userController.logout);
userRouter.post("/updatedata",authUser, userController.updateData);


export default userRouter;
