import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { academicDepartmentServices } from "./academicDepartment.service";



const createAcademicDepartment = catchAsync(async (req, res, next) => {
    const result = await academicDepartmentServices.createAcademicDepartmentIntoDB(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic Department is created successfully",
        data: result
    })
})


const getSingleAcademicDepartment = catchAsync(async (req, res, next) => {
    const result = await academicDepartmentServices.getSingleAcademicDepartmentFromDB(req.params.departmentId);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic Department is retrieved successfully",
        data: result
    })
})