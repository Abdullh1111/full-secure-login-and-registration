import { NextFunction, Request, Response } from "express";
import { user } from "../../module/users/user.model";
import appError from "../../ErrorHandler/appError";

const userExists = async (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;
  const result = await user.findOne({ email});
  if (result) {
    return next(new appError("user already exists", 400));
  }
  next();
};

export const loginUserExists = async (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;
  const result = await user.findOne({ email});
  if (!result) {
    return next(new appError("user doesn't exists", 400));
  }
  next();
};

export default userExists;
