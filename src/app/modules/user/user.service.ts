import { Types } from "mongoose";
import config from "../../config";
import { AcademicSemester } from "../academicSemester/academicSemester.modal";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.modal";
import { TUser } from "./user.interface";
import { User } from "./user.modal";
import { generateStudentId } from "./user.utils";

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
  userData.id = await generateStudentId(admissionSemester) ;
  const newUser = await User.create(userData);
  console.log({ newUser });

  console.log({ studentData: payload });
  if (Object.keys(newUser).length) {
    payload.id = newUser.id;
    payload.user = newUser._id;

    const newStudent = await Student.create(payload);
    console.log({ newStudent });
    return newStudent;
  }
  //   return newUser;
};

export const UserServices = {
  createStudentInfoDB,
};
