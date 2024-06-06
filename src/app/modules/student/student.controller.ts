import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { studentServices } from "./student.service";




const getAllStudents = catchAsync(async (req, res, next) => {
  console.log(req.query);
  const result = await studentServices.getAllStudentsFromDB(req.query
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Students are retrieved successfully",
    data: result,
  });
});

const getSingleStudent =catchAsync( async (req,res,next) => {
    
    const result = await studentServices.getSingleStudentFromDB(req.params.studentId);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Student is retrieved successfully",
        data: result,
    })
})


const deleteSingleStudent =catchAsync( async (req,res,next) => {
    const result = await studentServices.deleteSingleStudentIntoDB(req.params.studentId);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Student is deleted successfully",
        data: result,
    })
})



const updateSingleStudent =catchAsync( async (req,res,next) => {
    
    const result = await studentServices.updateStudentIntoDB(req.params.studentId,req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Student is retrieved successfully",
        data: result,
    })
})

export const studentControllers = {
  getSingleStudent,
    updateSingleStudent,
  getAllStudents,
  deleteSingleStudent,
};