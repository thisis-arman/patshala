import { JwtPayload } from "jsonwebtoken";
import { TEnrolledCourse } from "./enrolledCourse.interface";
import EnrolledCourse from "./enrolledCourse.model";
import { OfferedCourse } from "../offeredCourse/offeredCourse.model";
import { AppError } from "../../errors/AppError";
import httpStatus from "http-status";

const createEnrolledCourseIntoDB = async (
  user: JwtPayload,
  payload: TEnrolledCourse
) => {
  /* 
    1.check if the offered course is exists
    2.check if the student already enrolled in the course
    3.let the student enroll the course
    */

  const isOfferedCourseExists = await OfferedCourse.findById(
    payload.offeredCourse
  );

  if (!isOfferedCourseExists) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      "This course does not exist in Offered Course"
    );
  }

  const isStudentAlreadyEnrolled = await EnrolledCourse.findOne({
    semesterRegistration: isOfferedCourseExists?.semesterRegistration,
    ,

  });
  if (isStudentAlreadyEnrolled) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "You have already enrolled for this course"
    );
  }



  const result = await EnrolledCourse.create(payload);
  return result;
};

export const EnrolledCourseServices = {
  createEnrolledCourseIntoDB,
};
