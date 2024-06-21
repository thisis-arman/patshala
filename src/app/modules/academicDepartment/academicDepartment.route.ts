import express from 'express';
import { academicController } from './academicDepartment.controller';
import validateRequest from '../../middlewares/validateRequest';
import {  academicDepartmentValidationSchemas } from './academicDepartment.zod.validation';

const router = express.Router();


router.post('/create-academic-department', validateRequest(academicDepartmentValidationSchemas.createAcademicDepartmentSchema), academicController.createAcademicDepartment)

router.get('/', academicController.getAllAcademicDepartments)
router.get('/:id', academicController.getSingleAcademicDepartment)
router.patch('/:id', academicController.deleteAcademicDepartment)
router.patch('/:id', academicController.updateAcademicDepartment);



export const AcademicDepartmentRoute = router;