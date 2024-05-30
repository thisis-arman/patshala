import catchAsync from "../../utils/catchAsync";
import { academicSemesterServices } from "./academicSemester.service";





const createAcademicSemester = catchAsync(async (req, res, next) => {
    const semesterInfo = req.body;
    const result = await academicSemesterServices.createAcademicSemesterIntoDB(semesterInfo)
    res.status(200).json({
        success: true,
        message: "Semester created successfully",
        data:result
    })
})





export const academicSemesterController = {
    createAcademicSemester
}