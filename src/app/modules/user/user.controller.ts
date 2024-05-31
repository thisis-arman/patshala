import { TStudent } from "./../student/student.interface";
import { User } from "./user.modal";
import { UserServices } from "./user.service";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";



const createStudent = catchAsync(async (req, res, next) => {
  const { password, studentData } = req.body;
  const result = await UserServices.createStudentInfoDB(password, studentData);
  sendResponse(
    res,
    {
      statusCode:
   success: true,
   message: "Student created successfully",
   data: result,
 });
});

export const UserControllers = {
  createStudent,
};
