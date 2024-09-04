import { NextFunction, Request, Response } from "express";
import appError from "../ErrorHandler/appError";
import  jwt  from 'jsonwebtoken';
import config from "../config";

const authUser = (req:Request,res: Response, next: NextFunction) =>{
    const {token} = req.cookies
    if(!token){
        throw new appError("User is unauthorize",401)
    }
    const decode = jwt.verify(token,config.jwt_secret as string)
    if(!decode){
        throw new appError("User is unauthorize",401)
    }
    res.locals.user = decode
    next() 

}

export default authUser