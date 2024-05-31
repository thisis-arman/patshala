import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

const validateRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    console.log("validate Request",{body:req.body});
    
    try {
      await schema.parseAsync({body:req.body});
      next();
    } catch (error) {
      next(error);
    }
  };
};

export default validateRequest;
