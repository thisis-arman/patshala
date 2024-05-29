import { NextFunction, Request, Response } from "express";


export const globalErrorHandler = (error :any, req: Request, res: Response, next: NextFunction) => {
    const statusCode = 500;
    const message = error.message || "Something went wrong";
    return res.status(statusCode).json({
        success: false,
        message: message,
        error
    })
    
}