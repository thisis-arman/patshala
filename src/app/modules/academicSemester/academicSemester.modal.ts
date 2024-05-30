import { Schema } from "mongoose";
import { TAcademicSemester } from "./academicSemester.interface";

const createAcademicSemesterSchema = new Schema<TAcademicSemester>({
  name: {
    type: String,
    required: [true, "Semester Name is required"],
  },
  year: {
    type: Number,
    required: [true, "Semester Year is required"],
  },
  code: {
    type: String,
    enum: ["01", "02", "03"],
    required: [true, "Semester Code is required"],
  },
  startMonth: {
    type: String,
    enum: [
      
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
      ],
    required: [true, "Start Month is required"],
  },
  endMonth: {
    type: String,
    enum: [
      
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
      ],
    required: [true, "End Month is required"],
  },
},
    {
        timestamps: true,
    }
);


export const academicSemestersValidation = {
    createAcademicSemesterSchema,
}