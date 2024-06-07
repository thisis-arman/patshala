import express from 'express';
import { facultyControllers } from './faculty.controller';


const router = express.Router();


router.get('/', facultyControllers.getAllFaculties);
router.get('/:id', facultyControllers.getSingleFaculty);
router.patch('/:id', facultyControllers.updateSingleFaculty);
router.patch('/:id', facultyControllers.deleteSingleFaculty);


export const FacultyRoutes = router;