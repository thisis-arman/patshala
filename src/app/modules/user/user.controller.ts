import { TStudent } from "./../student/student.interface";
import { User } from "./user.modal";
import { UserServices } from "./user.service";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const createStudent = catchAsync(async (req, res, next) => {
  const { password, studentData } = req.body;
  const result = await UserServices.createStudentInfoDB(password, studentData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Student created successfully",
    data: result,
  });
});

export const UserControllers = {
  createStudent,
};
