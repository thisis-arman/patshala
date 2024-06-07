import { UserControllers } from "./user.controller";
import express from "express";
import { studentValidations } from "../student/student.zod.validation";
import validateRequest from "../../middlewares/validateRequest";
import { facultyValidationSchema } from "../faculty/faculty.zod.validation";

const router = express.Router();

router.post(
  "/create-student",
  validateRequest(studentValidations.createValidationSchema),
  UserControllers.createStudent
);

router.post(
  "/create-faculty",
  validateRequest(facultyValidationSchema.createFacultySchema),
  UserControllers.createFaculty
);

export const UserRoutes = router;
