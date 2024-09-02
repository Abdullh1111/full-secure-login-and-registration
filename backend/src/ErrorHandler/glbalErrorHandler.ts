import { NextFunction, Request, Response } from "express";
import AppError from "./appError";

const globalErrorHandler = (err:AppError, req:Request, res:Response, next:NextFunction) => {
    const message = err.message || "Enternal server error"
    const statusCode = err.statusCode || 500
    res.status(statusCode).json({
        success: false,
        message: message
    })
}

export default globalErrorHandler
