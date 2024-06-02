import { Schema, model } from "mongoose";
import TAcademicDepartment from "./academicDepartment.interface";

const createAcademicDepartmentSchema = new Schema<TAcademicDepartment>({
  name: {
    type: String,
    required: [true, "Department name is Required"],
    unique: true,
  },
  academicFaculty: {
    type: Schema.Types.ObjectId,
    required: [true, "Faculty is required"],
  },
});

export const academicDepartmentSchemas = {
  createAcademicDepartmentSchema,
};

export const AcademicDepartment = model<TAcademicDepartment>(
  "AcademicDepartment",
  createAcademicDepartmentSchema
);
