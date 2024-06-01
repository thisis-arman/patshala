import { z } from "zod";

const createAcademicFacultySchema = z.object({
  name: z.string().max(100, "Faculty Name must be 100 characters or less"),
});

export const academicFacultySchemas = {
  createAcademicFacultySchema,
};
