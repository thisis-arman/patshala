import { z } from "zod";

const createAcademicFacultyValidationSchema = z.object({
  body: z.object({
    name: z.string().max(100, "Faculty Name must be 100 characters or less"),
    isDeleted: z.boolean().default(false),
  }),
});

export const academicFacultyValidations = {
  createAcademicFacultyValidationSchema,
};
