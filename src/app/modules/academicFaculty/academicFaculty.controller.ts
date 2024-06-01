import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { academicFacultyServices } from "./academicFaculty.service";


const createAcademicFaculty = catchAsync(async (req, res, next) => {
    const result = await academicFacultyServices.createAcademicFacultyIntoDB(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        message: "Academic Faculty is created successfully",
        success: true,
        data: result,
    })
})



export const academicFacultyController = {
    createAcademicFaculty,
}