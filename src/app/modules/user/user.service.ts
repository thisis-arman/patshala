import config from "../../config";
import { TStudent } from "../student/student.interface";
import { NewUser } from "./user.interface";
import { User } from "./user.modal";

const createStudentInfoDB = async (password: string, student: TStudent) => {
  let user: NewUser = {};

  user.id = "2030100001";
  (user.role = "student"),
    (user.password = password || (config.default_password as string));

  const result = await User.create(user);

  if (Object.keys(result).length) {
    student.id = result.id;
    student.user = result._id;
  }
  return result;
};

export const UserServices = {
  createStudentInfoDB,
};
