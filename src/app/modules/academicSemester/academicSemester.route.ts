import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { academicSemesterController } from "./academicSemester.controller";
import { AcademicSemesterValidations } from "./academicSemester.zod.validation";
const router = express.Router();

router.post(
  "/create-academic-semester",
  validateRequest(AcademicSemesterValidations.createAcademicSemesterValidationSchema),
  academicSemesterController.createAcademicSemester
);

router.get("/:id", academicSemesterController.getSingleAcademicSemester);

router.patch(
  "/:id",
  academicSemesterController.updateAcademicSemester
);

router.get("/", academicSemesterController.getAcademicSemesters);

export const AcademicSemesterRoutes = router;
