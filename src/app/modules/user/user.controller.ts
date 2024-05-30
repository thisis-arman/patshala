import { TStudent } from "./../student/student.interface";
import { User } from "./user.modal";
import { UserServices } from "./user.service";
import catchAsync from "../../utils/catchAsync";



const createStudent = catchAsync(async (req, res, next) => {
  const { password, studentData } = req.body;
  const result = await UserServices.createStudentInfoDB(password, studentData);
  res.status(200).json({
    success: true,
    message: "Student created successfully",
    data: result,
  });
});

export const UserControllers = {
  createStudent,
};
