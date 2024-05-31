import { UserControllers } from "./user.controller";
import express from "express";
import { studentValidations } from "../student/student.zod.validation";
import validateRequest from "../../middlewares/validateRequest";

const router = express.Router();

router.post(
  "/create-student",
  validateRequest(studentValidations.createValidationSchema),
  UserControllers.createStudent
);

export const UserRoutes = router;
