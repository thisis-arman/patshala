import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AuthServices } from "./auth.service";

const loginUser = catchAsync(async (req, res, next) => {
  const user = await AuthServices.LoginUser(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Login successful",
    data: user,
  });
});



const changePassword = catchAsync(async (req, res, next) => {
      const user = await AuthServices.changePassword(req.user,req.body);
    console.log(req.user, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Password changed successfully",
    data: null,
  });
});




export const AuthController = {
    loginUser,
    changePassword
}