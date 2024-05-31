import catchAsync from "../../utils/catchAsync";
import { studentServices } from "./student.service";



const getSingleStudent =catchAsync( async (req,res,next) => {
    
    const result = await studentServices.getSingleStudentFromDB(req.params.studentId);
    return result;
})