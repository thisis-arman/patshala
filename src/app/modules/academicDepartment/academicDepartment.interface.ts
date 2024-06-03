import { Types } from "mongoose";

type TAcademicDepartment = {
  name: string;
  academicFaculty: Types.ObjectId;
  isDeleted: boolean,
};
export default TAcademicDepartment;