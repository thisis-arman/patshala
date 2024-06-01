import express from "express";
import { academicFacultyController } from "./academicFaculty.controller";
import validateRequest from "../../middlewares/validateRequest";
import { academicFacultyValidations } from "./academicFaculty.zod.validation";

const router = express.Router();

router.post(
  "/create-academic-faculty",
  validateRequest(
    academicFacultyValidations.createAcademicFacultyValidationSchema
  ),
  academicFacultyController.createAcademicFaculty
);

router.get("/:facultyId", academicFacultyController.getSingleAcademicFaculty);
router.patch("/:facultyId", academicFacultyController.updateAcademicFaculty);
router.patch("/:facultyId", academicFacultyController.deleteAcademicFaculty);


export const AcademicFacultyRoute = router;
