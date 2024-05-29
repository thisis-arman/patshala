import config from "../../config";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.modal";
import { TUser } from "./user.interface";
import { User } from "./user.modal";

const createStudentInfoDB = async (password: string, studentData: TStudent) => {
  let userData: Partial<TUser> = {};

  userData.role = "student",
  userData.password = password || (config.default_password as string);
  
    userData.id = "2030100003";
    userData.status='in-progress'
    const newUser = await User.create(userData);
    console.log({newUser})

    console.log({studentData})
  if (Object.keys(newUser).length) {
    studentData.id = newUser.id;
      studentData.user = newUser._id;


      const newStudent = await Student.create(studentData)
      console.log({newStudent});
      return newStudent;
      

  }
//   return newUser;
};

export const UserServices = {
  createStudentInfoDB,
};
