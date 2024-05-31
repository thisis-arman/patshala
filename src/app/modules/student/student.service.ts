import { TStudent } from "./student.interface";
import { Student } from "./student.modal"


const getAllStudentsFromDB = async () => {
    const result = await Student.find({});
    return result;
}

const getSingleStudentFromDB = async (_id :string) => {
    const result = await Student.findOne({_id});
    return result;
}


const updateStudentIntoDB = async (_id :string,payload:Partial<TStudent>) => {
    const result = await Student.findByIdAndUpdate({_id},{payload});
    return result;
}


const deleteSingleStudentIntoDB = async (_id :string) => {

    const result = await Student.findByIdAndUpdate({ _id }, { isDeleted: true })
    return result;
    
}


export const studentServices = {
  getAllStudentsFromDB,
  updateStudentIntoDB,
  getSingleStudentFromDB,
  deleteSingleStudentIntoDB,
};