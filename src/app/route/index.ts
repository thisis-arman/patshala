import { AcademicDepartmentRoute } from "../modules/academicDepartment/academicDepartment.route";
import { AcademicSemesterRoute } from "../modules/academicSemester/academicSemester.route";
import { StudentRoute, StudentRoutes } from "../modules/student/student.route";
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
    route: AcademicSemesterRoute,
  },
  {
    path: "/academic-departments",
    route: AcademicDepartmentRoute,
  },
];

modulesRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
