
import express from 'express';
import { academicFacultyController } from './academicFaculty.controller';
import validateRequest from '../../middlewares/validateRequest';


const router = express.Router();


router.post('/create-academic-faculty',validateRequest(),academicFacultyController.createAcademicFaculty)