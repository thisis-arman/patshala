import mongoose, { Types } from "mongoose";
import config from "../../config";
import { AcademicSemester } from "../academicSemester/academicSemester.modal";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.modal";
import { TUser } from "./user.interface";
import { User } from "./user.modal";
import { generateStudentId } from "./user.utils";
import httpStatus from "http-status";

const createStudentInfoDB = async (password: string, payload: TStudent) => {
  let userData: Partial<TUser> = {};

  (userData.role = "student"),
    (userData.password = password || (config.default_password as string));

  // userData.id = "203010000110";
  userData.status = "in-progress";

  // find academic semester info
  const admissionSemester = await AcademicSemester.findById(
    payload.admissionSemester
  );

  //set  generated id

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
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to create Student");
    }
    session.commitTransaction();
    session.endSession();
    return newStudent;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
  }
  //   return newUser;
};

export const UserServices = {
  createStudentInfoDB,
};
