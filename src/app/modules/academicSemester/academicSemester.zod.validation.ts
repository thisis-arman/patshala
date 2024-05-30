import { z } from "zod";

const monthEnum = [
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
] as const;

const createAcademicSemesterSchema = z.object({
  name: z.string().nonempty("Semester Name is required"),
  year: z.number().int().positive("Semester Year must be a positive integer"),
  code: z.enum(["01", "02", "03"], {
    errorMap: () => ({
      message: "Semester Code is required and must be one of '01', '02', '03'",
    }),
  }),
  startMonth: z.enum(monthEnum, {
    errorMap: () => ({
      message: "Start Month is required and must be a valid month",
    }),
  }),
  endMonth: z.enum(monthEnum, {
    errorMap: () => ({
      message: "End Month is required and must be a valid month",
    }),
  }),
});

export const academicSemestersValidation = {
  createAcademicSemesterSchema,
};
