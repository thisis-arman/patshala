import jwt, { JwtPayload } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import catchAsync from "../utils/catchAsync";
import { AppError } from "../errors/AppError";
import httpStatus from "http-status";
import config from "../config";
import { User } from "../modules/user/user.modal";

const Auth = (...requiredRoles: string[]) => {
  console.log("auth");
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    console.log({ token });

    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, "Unauthorized request");
    }

    const decoded = jwt.verify(
      token,
      config.jwt_access_token as string
    ) as JwtPayload;

    const { userId, role } = decoded;

    const user = await User.isUserExistsByCustomId(userId);

    if (!user) {
      throw new AppError(httpStatus.NOT_FOUND, `User ${userId} does not exist`);
    }

    const isDeleted = user.isDeleted;
    if (isDeleted) {
      throw new AppError(httpStatus.FORBIDDEN, `this User is already deleted`);
    }

    const isStatusBlocked = user.status === "blocked";
    if (isStatusBlocked) {
      throw new AppError(httpStatus.FORBIDDEN, `User is already blocked`);
    }

    if (requiredRoles && !requiredRoles.includes(role)) {
      throw new AppError(
        httpStatus.UNAUTHORIZED,
        "You are not authorized User"
      );
    }

    req.user = decoded as JwtPayload;

    next();
  });
};

export default Auth;
