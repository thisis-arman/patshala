import { Schema, model } from "mongoose";
import { TAcademicSemester } from "./academicSemester.interface";

const createAcademicSemesterSchema = new Schema<TAcademicSemester>(
  {
    name: {
      type: String,
      enum:["Autumn","Summer","Fall"],
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

createAcademicSemesterSchema.pre("save", async function (next) {
  const isSemesterExists = await AcademicSemester.findOne({
    year: this.year,
    name: this.name,
  });

  if (isSemesterExists) {
    throw new Error("Semester is already exists!");
  }
  next();
});

export const academicSemestersValidation = {
  createAcademicSemesterSchema,
};

export const AcademicSemester = model<TAcademicSemester>(
  "AcademicSemester",
  createAcademicSemesterSchema
);
