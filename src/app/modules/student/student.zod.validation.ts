import { z } from "zod";

// Define individual schemas for nested objects

const userNameSchema = z.object({
  firstName: z
    .string()
    .max(20, "First Name can not exceed 20 characters")
    .trim()
    .nonempty("First Name is required"),
  middleName: z.string().trim().optional(),
  lastName: z
    .string()
    .max(20, "Last Name can not exceed 20 characters")
    .trim()
    .nonempty("Last Name is required"),
});

const guardianSchema = z.object({
  fatherName: z
    .string()
    .max(30, "Father Name can not exceed 30 characters")
    .trim()
    .nonempty("Father Name is required"),
  fatherOccupation: z.string().trim().nonempty("Father Occupation is required"),
  fatherContactNo: z.string().trim().nonempty("Father Contact No is required"),
  motherName: z
    .string()
    .max(30, "Mother Name can not exceed 30 characters")
    .trim()
    .nonempty("Mother Name is required"),
  motherOccupation: z.string().trim().nonempty("Mother Occupation is required"),
  motherContactNo: z.string().trim().nonempty("Mother Contact No is required"),
});

const localGuardianSchema = z.object({
  name: z.string().trim().nonempty("Local Guardian's name is required"),
  occupation: z.string().trim().nonempty("Occupation is required"),
  contactNo: z
    .string()
    .max(14, "Invalid Phone Number")
    .trim()
    .nonempty("Contact No is required"),
  address: z.string().trim().nonempty("Address is required"),
});

const studentSchema = z
  .object({
    id: z.string().nonempty("Id is required"),
    user: z.string().nonempty("User Id is required"),
    password: z.string().nonempty("Password is required"),
    name: userNameSchema,
    gender: z.enum(["Male", "Female", "Other"], {
      required_error: "Gender is required",
    }),
    dateOfBirth: z.date().optional(),
    email: z
      .string()
      .email("Invalid email address")
      .nonempty("Email is required"),
    contactNo: z.string().trim().nonempty("Contact No is required"),
    emergencyContactNo: z
      .string()
      .trim()
      .nonempty("Emergency Contact No is required"),
    bloodGroup: z
      .enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"])
      .optional(),
    presentAddress: z.string().nonempty("Present Address is required"),
    permanentAddress: z.string().nonempty("Permanent Address is required"),
    guardian: guardianSchema,
    localGuardian: localGuardianSchema,
    profileImg: z.string().optional(),
    isDeleted: z.boolean().default(false),
  })
  .strict();

export default studentSchema;
