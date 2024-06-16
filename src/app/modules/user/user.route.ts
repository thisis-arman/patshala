import { UserControllers } from "./user.controller";
import express from "express";
import { studentValidations } from "../student/student.zod.validation";
import validateRequest from "../../middlewares/validateRequest";
import { facultyValidationSchema } from "../faculty/faculty.zod.validation";
import Auth from "../../middlewares/Auth";
import { USER_ROLE } from "./user.constant";
import { AdminValidations } from "../admin/admin.zod.validation";
import { AdminControllers } from "../admin/admin.controller";

const router = express.Router();

router.post(
  "/create-student",
  Auth(USER_ROLE.admin),
  validateRequest(studentValidations.createValidationSchema),
  UserControllers.createStudent
);

router.post(
  "/create-faculty",
  Auth(USER_ROLE.admin),
  validateRequest(facultyValidationSchema.createFacultySchema),
  UserControllers.createFaculty
);

router.post(
  "/create-admin",
  validateRequest(AdminValidations.createAdminValidationSchema),
  UserControllers.createAdmin
);

export const UserRoutes = router;
