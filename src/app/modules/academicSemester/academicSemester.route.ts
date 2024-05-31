import { academicSemesterController } from './academicSemester.controller';
import express from 'express';



const router = express.Router()

router.post('/create-semester', academicSemesterController.createAcademicSemester)



export const AcademicSemesterRoute = router;