import express from 'express';
import { academicController } from './academicDepartment.controller';
import validateRequest from '../../middlewares/validateRequest';
import {  academicDepartmentValidationSchemas } from './academicDepartment.zod.validation';

const router = express.Router();


router.post('/create-academic-department',validateRequest(academicDepartmentValidationSchemas.createAcademicDepartmentSchema), academicController.createAcademicDepartment)
router.get('/', academicController.getAllAcademicDepartments)
router.get('/:departmentId', academicController.getSingleAcademicDepartment)
router.patch('/:departmentId', academicController.deleteAcademicDepartment)
router.patch('/:departmentId', academicController.updateAcademicDepartment)