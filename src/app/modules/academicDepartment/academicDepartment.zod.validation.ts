import { z } from "zod";

const createAcademicDepartmentSchema = z.object({
  body: z.object({
    name: z
      .string({
        required_error: "Department name is required",
      })
      .max(100, "Department name must be 100 characters or less"),
    academicFaculty: z.string({
      required_error: "Faculty is required",
    }),
    isDeleted: z.boolean().default(false),
  }),
});

export const academicDepartmentValidationSchemas = {
  createAcademicDepartmentSchema,
};
