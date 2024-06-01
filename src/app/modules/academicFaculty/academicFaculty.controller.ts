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


const getAcademicFaculties = catchAsync(async (req, res, next) => {
    const result = await academicFacultyServices.getAcademicFacultiesFromDB();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        message: "Academic Faculties are retrieved successfully",
        success: true,
        data: result,
    })
})

const getSingleAcademicFaculty = catchAsync(async (req, res, next) => {
    const result = await academicFacultyServices.getSingleAcademicFacultyFromDB(req.params.facultyId);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        message: "Academic Faculty is retrieved successfully",
        success: true,
        data: result,
    })
})

const updateAcademicFaculty = catchAsync(async (req, res, next) => {
    const result = await academicFacultyServices.updateAcademicFacultyFromDB(req.params.facultyId,req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        message: "Academic Faculty is updated successfully",
        success: true,
        data: result,
    })
})


const deleteAcademicFaculty = catchAsync(async (req, res, next) => {
    const result = await academicFacultyServices.deleteAcademicFacultyFromDB(req.params.facultyId);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        message: "Academic Faculty is deleted successfully",
        success: true,
        data: result,
    })
})



export const academicFacultyController = {
    createAcademicFaculty,
    getSingleAcademicFaculty,
    updateAcademicFaculty,
    deleteAcademicFaculty,
    getAcademicFaculties
}