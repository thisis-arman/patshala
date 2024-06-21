import { JwtPayload } from "jsonwebtoken";
import { TEnrolledCourse } from "./enrolledCourse.interface";
import EnrolledCourse from "./enrolledCourse.model";

const createEnrolledCourseIntoDB = async (user: JwtPayload, payload: TEnrolledCourse) => {
    
    /* 
    1.check if the offered course is exists
    2.check if the student already enrolled in the course
    3.let the student enroll the course
    */
    
    
  const result = await EnrolledCourse.create(payload);
  return result;
};

export const EnrolledCourseServices = {
  createEnrolledCourseIntoDB,
};
