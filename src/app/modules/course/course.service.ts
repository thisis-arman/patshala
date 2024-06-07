import QueryBuilder from "../../builder/queryBuilder";
import { CourseSearchableFields } from "./course.constant";
import { TCourse } from "./course.interface";
import { Course } from "./course.model";

const createCourseIntoDB = async (payload: TCourse) => {
  const course = await Course.create(payload);
  return course;
};

const getAllCoursesFromDB = async (query: Record<string, unknown>) => {
  const courses = new QueryBuilder(Course.find(), query)
    .search(CourseSearchableFields)
    .filter()
    .sort()
    .paginate()
        .fields();
    
    
    return courses;
};

export const CourseService = {
    createCourseIntoDB,
    getAllCoursesFromDB
};
