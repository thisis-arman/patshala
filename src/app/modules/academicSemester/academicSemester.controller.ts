import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { academicSemesterServices } from "./academicSemester.service";

const createAcademicSemester = catchAsync(async (req, res, next) => {
  const semesterInfo = req.body;
  const result = await academicSemesterServices.createAcademicSemesterIntoDB(
    semesterInfo
  );
  res.status(200).json({
    success: true,
    message: "Semester created successfully",
    data: result,
  });
});

const getAcademicSemesters = catchAsync(async (req, res, next) => {
  const result = await academicSemesterServices.getAcademicSemestersFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "academic semesters were successfully retrieved",
    data: result,
  });
});

const getSingleAcademicSemester = catchAsync(async (req, res, next) => {
  const result = await academicSemesterServices.getSingleAcademicSemesterFromDB(req.params.semesterId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Semester is Retrieved successfully",
    data: result,
  });
});


const updateAcademicSemester = catchAsync(async (req, res, next) => {
  const result = await academicSemesterServices.updateAcademicSemesterIntoDB(req.params.semesterId,req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Semester is Retrieved successfully",
    data: result,
  });
});

export const academicSemesterController = {
    createAcademicSemester,
    getAcademicSemesters,
    updateAcademicSemester,
    getSingleAcademicSemester
};
