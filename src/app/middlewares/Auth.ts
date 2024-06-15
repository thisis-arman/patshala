import  jwt, { JwtPayload }  from 'jsonwebtoken';
import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import catchAsync from "../utils/catchAsync";
import { AppError } from "../errors/AppError";
import httpStatus from "http-status";
import config from '../config';

const Auth = () => {
  console.log("auth");
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    // await schema.parseAsync({ body: req.body });

    const token = req.headers.authorization;
    console.log({ token });

    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, "Unauthorized request");
    }

    jwt.verify(token, config.jwt_access_token as string, function (err, decoded) {
      if (err) {
          throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized User");
      }
     
      req.user = decoded as JwtPayload;

    });
    next();
  });
};

export default Auth;
