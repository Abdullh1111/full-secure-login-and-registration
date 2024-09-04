import { Router } from "express";
import userController from "./user.controller";
import authUser from "../../middleware/authentiication";

const userRouter = Router();

userRouter.post("/login", userController.login);
userRouter.get("/logout", userController.logout);
userRouter.get("/getuserdata",authUser, userController.userData);
userRouter.post("/updatedata",authUser, userController.updateData);


export default userRouter;
