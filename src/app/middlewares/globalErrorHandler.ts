import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { TErrorSource } from "../interface/error";
import { ZodError } from "zod";
import { handleZodError } from "../errors/handleZodError";


export const globalErrorHandler :ErrorRequestHandler = (error , req, res, next) => {
    let statusCode = 500;
    let message = error.message || "Something went wrong";


    let errorSources:TErrorSource = [{
        path: "",
        message:"Something went wrong"
    }]


    if (error instanceof ZodError) {
        const simplifiedError = handleZodError(error);
        statusCode = simplifiedError?.statusCode,
            message = simplifiedError?.message,
            errorSources=errorSources.errorSources
            
    }

    return res.status(statusCode).json({
        success: false,
        message: message,
        errorSources,
        
    })
    
}