import { JwtPayload } from "jsonwebtoken";
import { TEnrolledCourse } from "./enrolledCourse.interface";
import EnrolledCourse from "./enrolledCourse.model";
import { OfferedCourse } from "../offeredCourse/offeredCourse.model";
import { AppError } from "../../errors/AppError";
import httpStatus from "http-status";
import { Student } from "../student/student.modal";
import mongoose from "mongoose";

const createEnrolledCourseIntoDB = async (
  user: JwtPayload,
  payload: TEnrolledCourse
) => {
  const { offeredCourse } = payload;
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

  const student = await Student.findOne({ id: user.userId });
  if (!student) {
    throw new AppError(httpStatus.NOT_FOUND, "Student does not exist");
  }

  const isStudentAlreadyEnrolled = await EnrolledCourse.findOne({
    semesterRegistration: isOfferedCourseExists?.semesterRegistration,
    offeredCourse,
    student: student.id,
  });

  if (isOfferedCourseExists.maxCapacity <= 0) {
    throw new AppError(httpStatus.BAD_GATEWAY,"No More seats available")
  }

  if (isStudentAlreadyEnrolled) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "You have already enrolled for this course"
    );
  }

  const session = await mongoose.startSession();


  try {

     session.startTransaction();
    
  const result = await EnrolledCourse.create(
    [
      {
        semesterRegistration: isOfferedCourseExists.semesterRegistration,
        academicSemester: isOfferedCourseExists.academicSemester,
        academicFaculty: isOfferedCourseExists.academicFaculty,
        academicDepartment: isOfferedCourseExists.academicDepartment,
        offeredCourse: offeredCourse,
        course: isOfferedCourseExists.course,
        student: student._id,
        faculty: isOfferedCourseExists.faculty,
        isEnrolled: true,
      },
    ],
    {session}
    );
    
  return result;
  } catch (error) {
    
  }
};

export const EnrolledCourseServices = {
  createEnrolledCourseIntoDB,
};
