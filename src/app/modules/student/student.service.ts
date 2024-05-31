import { TStudent } from "./student.interface";
import { Student } from "./student.modal"


const getAllStudents = async () => {
    const result = await Student.find({});
    return result;
}

const getSingleStudent = async (_id :string) => {
    const result = await Student.findOne({_id});
    return result;
}


const updateStudent = async (_id :string,payload:Partial<TStudent>) => {
    const result = await Student.findByIdAndUpdate({_id},{payload});
    return result;
}


const deleteSingleStudent = async (_id) => {

    const result = await Student.
    
}


export const studentServices = {
  getAllStudents,
  updateStudent,
  getSingleStudent,
  deleteSingleStudent,
};