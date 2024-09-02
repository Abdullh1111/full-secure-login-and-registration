import { NextFunction, Request, RequestHandler, Response } from "express"
import AppError from "./appError"

const catchAsync = (fn: RequestHandler) =>{
    return async(req: Request,res: Response,next: NextFunction)=>{
        Promise.resolve(fn(req,res,next)).catch(err=>next(new AppError(err.message,400)))

    }
}

export default catchAsync