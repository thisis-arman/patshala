import { AcademicSemesterRoute } from "../modules/academicSemester/academicSemester.route";
import { UserRoutes } from "./../modules/user/user.route";
import express from "express";

const router = express.Router();

const modulesRoutes = [
  {
    path: "/users",
    route: UserRoutes,
  },
 /*  {
    path: "/students",
  }, */
  {
    path: "/academicsemester",
    route: AcademicSemesterRoute,
  },
];

modulesRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
