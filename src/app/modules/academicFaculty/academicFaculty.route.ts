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

router.get("/", academicFacultyController.getAcademicFaculties);
router.get("/:id", academicFacultyController.getSingleAcademicFaculty);
router.patch("/:id", academicFacultyController.updateAcademicFaculty);
router.patch("/:id", academicFacultyController.deleteAcademicFaculty);


export const AcademicFacultyRoute = router;
