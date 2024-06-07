import mongoose, { Types } from "mongoose";
import config from "../../config";
import { AcademicSemester } from "../academicSemester/academicSemester.modal";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.modal";
import { TUser } from "./user.interface";
import { User } from "./user.modal";
import { generateFacultyId, generateStudentId } from "./user.utils";
import httpStatus from "http-status";
import TFaculty from "../faculty/faculty.interface";
import { AcademicDepartment } from "../academicDepartment/academicDepartment.model";
import { Faculty } from "../faculty/faculty.model";
import { AppError } from "../../errors/AppError";

const createStudentInfoDB = async (password: string, payload: TStudent) => {
  let userData: Partial<TUser> = {};

  userData.role = "student";
  userData.password = password || (config.default_password as string);
  userData.status = "in-progress";

  // Find academic semester info
  const admissionSemester = await AcademicSemester.findById(
    payload.admissionSemester
  );
  if (!admissionSemester) {
    throw new AppError(httpStatus.BAD_REQUEST, "Admission semester not found");
  }

  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    userData.id = await generateStudentId(admissionSemester);

    const newUser = await User.create([userData], { session });

    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to create user");
    }

    payload.id = newUser[0].id;
    payload.user = newUser[0]._id;

    const newStudent = await Student.create([payload], { session });

    if (!newStudent.length) {
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to create student");
    }

    await session.commitTransaction();
    session.endSession();
    return newStudent;
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    throw error; // Ensure the error is rethrown or handled appropriately
  }
};







const createFacultyIntoDB = async (password: string, payload: TFaculty) => {
  // create a user object
  const userData: Partial<TUser> = {};

  //if password is not given , use deafult password
  userData.password = password || (config.default_password as string);

  //set student role
  userData.role = "faculty";

  userData.status='in-progress'
  // find academic department info
  const academicDepartment = await AcademicDepartment.findById(
    payload.academicDepartment
  );

  if (!academicDepartment) {
    throw new AppError(400, "Academic department not found");
  }

  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    //set  generated id
    userData.id = await generateFacultyId();

    // create a user (transaction-1)
    const newUser = await User.create([userData], { session }); // array

    //create a faculty
    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to create user");
    }
    // set id , _id as user
    payload.id = newUser[0].id;
    payload.user = newUser[0]._id; //reference _id

    // create a faculty (transaction-2)

    const newFaculty = await Faculty.create([payload], { session });

    if (!newFaculty.length) {
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to create faculty");
    }

    await session.commitTransaction();
    await session.endSession();

    return newFaculty;
  } catch (err: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(err);
  }
};

export const UserServices = {
  createStudentInfoDB,
  createFacultyIntoDB,
};
