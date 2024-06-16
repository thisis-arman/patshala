import { TStudent } from "./../student/student.interface";
import { User } from "./user.modal";
import { UserServices } from "./user.service";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const createStudent = catchAsync(async (req, res, next) => {
  const { password, studentData } = req.body;
  console.log({studentData});
  const result = await UserServices.createStudentInfoDB(password, studentData);
  console.log({result});
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Student created successfully",
    data: result,
  });
});



const createFaculty = catchAsync(async (req, res, next) => {
  console.log("checked;;",req.body)
  const { password, facultyData } = req.body;
  console.log({facultyData});
  const result = await UserServices.createFacultyIntoDB(password, facultyData);
  console.log({result});
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Faculty is  created successfully",
    data: result,
  });
});


const createAdmin = catchAsync(async (req, res) => {
  const { password, admin: adminData } = req.body;

  const result = await UserServices.createAdminIntoDB(password, adminData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Admin is created Successfully",
    data: result,
  });
});

export const UserControllers = {
  createStudent,
  createFaculty,
  createAdmin
};
