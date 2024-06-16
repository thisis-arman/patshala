import { bcrypt } from "bcrypt";
import httpStatus from "http-status";
import { AppError } from "../../errors/AppError";
import { User } from "../user/user.modal";
import { TAuth } from "./auth.interface";
import jwt from "jsonwebtoken";
import config from "../../config";

const LoginUser = async (payload: TAuth) => {
  const user = await User.isUserExistsByCustomId(payload.id);

  if (!user) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      `User ${payload.id} does not exist`
    );
  }

  const isDeleted = user.isDeleted;
  if (isDeleted) {
    throw new AppError(httpStatus.FORBIDDEN, `this User is already deleted`);
  }

  const isStatusBlocked = user.status === "blocked";
  if (isStatusBlocked) {
    throw new AppError(httpStatus.FORBIDDEN, `User is already blocked`);
  }

  console.log("passwords", payload.password, user);

  const isPasswordMatched = await User.isPasswordMatched(
    payload.password,
    user.password
  );
  if (!isPasswordMatched) {
    throw new AppError(httpStatus.BAD_REQUEST, `Password does not match`);
  }

  const jwtPayload = {
    userId: user.id,
    role: user.role,
  };

  // Create access token

  const accessToken = jwt.sign(jwtPayload, config.jwt_access_token as string, {
    expiresIn: "5d",
  });

  console.log({ accessToken });
  return {
    accessToken,
    needsPasswordChange: user.needsPasswordChange,
  };
};

const changePassword = async (
  userData: { userId: string; role: string },
  payload
) => {
  const user = await User.isUserExistsByCustomId(userData.userId);

  if (!user) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      `User ${userData.userId} does not exist`
    );
  }

  const isDeleted = user.isDeleted;
  if (isDeleted) {
    throw new AppError(httpStatus.FORBIDDEN, `this User is already deleted`);
  }

  const isStatusBlocked = user.status === "blocked";
  if (isStatusBlocked) {
    throw new AppError(httpStatus.FORBIDDEN, `User is already blocked`);
  }

  const isPasswordMatched = await User.isPasswordMatched(
    payload.password,
    user.password
  );
  if (!isPasswordMatched) {
    throw new AppError(httpStatus.BAD_REQUEST, `Password does not match`);
  }

  const newHashedPassword = bcrypt.hash(
    payload.newPassword,
    Number(config.bcrypt_salt_rounds)
  );

  await User.findOneAndUpdate(
    { id: userData.userId, role: userData.role },
    {
      password: newHashedPassword,
      needsPasswordChange: false,
      passwordUpdatedAt: new Date(),
    }
  );
};

export const AuthServices = {
  LoginUser,
  changePassword,
};
