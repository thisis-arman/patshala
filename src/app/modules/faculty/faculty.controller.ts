import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { facultyServices } from "./faculty.service";

const getAllFaculties = catchAsync(async (req, res, next) => {
  
  const result = await facultyServices.getAllFacultiesFromDB(req.query);
  console.log({ result });
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Retrieved All Faculties successfully",
    data: result,
  });
});


const getSingleFaculty = catchAsync(async (req, res, next) => {
  
  const result = await facultyServices.getSingleFacultyFromDB(req.params.facultyId);
  console.log({ result });
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Retrieved a Faculty successfully",
    data: result,
  });
});


const updateSingleFaculty = catchAsync(async (req, res, next) => {
  
  const result = await facultyServices.updateFacultyIntoDB(req.params.facultyId,req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Updated a Faculty successfully",
    data: result,
  });
});

const deleteSingleFaculty = catchAsync(async (req, res, next) => {
  
  const result = await facultyServices.deleteFacultyFromDB(req.params.facultyId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Deleted a Faculty successfully",
    data: result,
  });
});



export const facultyControllers = {
    getAllFaculties,
    getSingleFaculty,
    updateSingleFaculty,
    deleteSingleFaculty 


}