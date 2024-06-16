import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AuthServices } from "./auth.service";
import { JwtPayload } from "jsonwebtoken";
import config from "../../config";

const loginUser = catchAsync(async (req, res, next) => {
  const { accessToken, refreshToken, needsPasswordChange } =
    await AuthServices.LoginUser(req.body);

  res.cookie("refreshToken", refreshToken, {
    secure: config.NODE_ENV === "production",
    httpOnly: true,
  });
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Login successful",
    data: {
      accessToken,
      needsPasswordChange,
    },
  });
});

const changePassword = catchAsync(async (req, res, next) => {
  const user = await AuthServices.changePassword(req.user, req.body);
  console.log(req.user, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Password changed successfully",
    data: user,
  });
});

export const AuthController = {
  loginUser,
  changePassword,
};
