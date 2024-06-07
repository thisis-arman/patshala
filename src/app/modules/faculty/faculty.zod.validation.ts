import { z } from "zod";
import { BloodGroup, Gender } from "./faculty.contstant";

// UserName Schema
const userNameSchema = z.object({
  firstName: z
    .string()
    .trim()
    .max(20, "Name cannot be more than 20 characters")
    .min(1, "First Name is required"),
  middleName: z.string().trim().optional(),
  lastName: z
    .string()
    .trim()
    .max(20, "Name cannot be more than 20 characters")
    .min(1, "Last Name is required"),
});

// Faculty Schema
const createFacultySchema = z.object({
  body: z.object({
    password: z.string(),
    facultyData: z.object({
      designation: z.string().min(1, "Designation is required"),
      name: userNameSchema,
      gender: z.enum(Gender, {
        errorMap: () => ({
          message: "Gender is required and must be a valid gender",
        }),
      }),
      dateOfBirth: z.string().optional(),
      email: z
        .string()
        .email("Invalid email address")
        .min(1, "Email is required"),
      contactNo: z.string().min(1, "Contact number is required"),
      emergencyContactNo: z
        .string()
        .min(1, "Emergency contact number is required"),
      bloodGroup: z
        .enum(BloodGroup, {
          errorMap: () => ({
            message: "Blood group must be a valid blood group",
          }),
        })
        .optional(),
      presentAddress: z.string().min(1, "Present address is required"),
      permanentAddress: z.string().min(1, "Permanent address is required"),
      profileImg: z.string().optional(),
      academicDepartment: z
        .string()
        .min(1, "Academic Department id is required"),
      isDeleted: z.boolean().optional(),
    }),
  }),
});

export const facultyValidationSchema = {
  createFacultySchema,
};
