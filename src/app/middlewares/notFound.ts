import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

export const notFound = (
 
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const message = "Api Not Found"
  return res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: message,
   
  });
};
