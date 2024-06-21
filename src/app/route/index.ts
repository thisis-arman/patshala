import { AcademicDepartmentRoute } from "../modules/academicDepartment/academicDepartment.route";
import { AcademicFacultyRoute } from "../modules/academicFaculty/academicFaculty.route";
import { AcademicSemesterRoutes } from "../modules/academicSemester/academicSemester.route";
import { AuthRoutes } from "../modules/auth/auth.route";
import { CourseRoutes } from "../modules/course/course.route";
import { FacultyRoutes } from "../modules/faculty/faculty.route";
import { offeredCourseRoutes } from "../modules/offeredCourse/offeredCourse.route";
import { semesterRegistrationRoutes } from "../modules/semesterRegistration.ts/semesterRegistration.route";
import {  StudentRoutes } from "../modules/student/student.route";
import { UserRoutes } from "./../modules/user/user.route";
import express from "express";

const router = express.Router();

const modulesRoutes = [
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/students",
    route: StudentRoutes,
  },
  {
    path: "/academic-semesters",
    route: AcademicSemesterRoutes,
  },
  {
    path: "/semester-registrations",
    route: semesterRegistrationRoutes,
  },
  {
    path: "/academic-departments",
    route: AcademicDepartmentRoute,
  },
  {
    path: "/academic-faculties",
    route: AcademicFacultyRoute,
  },
  {
    path: "/faculties",
    route: FacultyRoutes,
  },
  {
    path: "/courses",
    route: CourseRoutes,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/offered-courses",
    route: offeredCourseRoutes,
  },
];

modulesRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
