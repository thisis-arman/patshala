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


const getAllAcademicDepartments = catchAsync(async (req, res, next) => {
    const result = await academicDepartmentServices.getAllAcademicDepartmentsFromDB({});
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic Departments are retrieved successfully",
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
const updateAcademicDepartment = catchAsync(async (req, res, next) => {
    const result = await academicDepartmentServices.updateAcademicDepartmentIntoDB(req.params.departmentId,req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic Department is updated successfully",
        data: result
    })
})
const deleteAcademicDepartment = catchAsync(async (req, res, next) => {
    const result = await academicDepartmentServices.deletedAcademicDepartmentFromDB(req.params.departmentId);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic Department is deleted successfully",
        data: result
    })
})


export const academicController = {
    createAcademicDepartment,
    getSingleAcademicDepartment,
    updateAcademicDepartment,
    deleteAcademicDepartment,
    getAllAcademicDepartments
}