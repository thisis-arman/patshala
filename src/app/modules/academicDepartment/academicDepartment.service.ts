import TAcademicDepartment from "./academicDepartment.interface";
import { AcademicDepartment } from "./academicDepartment.model";

const createAcademicDepartmentIntoDB = async (payload: TAcademicDepartment) => {
  const result = await AcademicDepartment.create(payload);
  return result;
};


const getAllAcademicDepartmentsFromDB = async () => {
  const result = await AcademicDepartment.find({});
  return result;
};

const getSingleAcademicDepartmentFromDB = async (_id: TAcademicDepartment) => {
    const result = await AcademicDepartment.findOne({ _id });
    return result;
}

const updateAcademicDepartmentIntoDB = async (_id:string,payload: Partial<TAcademicDepartment>) => {
  const result = await AcademicDepartment.findOne({ _id },{payload});
  return result;
};

const deletedAcademicDepartmentFromDB = async (_id: string) => {
    
    const result = await AcademicDepartment.findByIdAndUpdate({ _id }, {
        isDeleted: true
    })
    return result;
    
}



export const academicDepartmentServices = {
  createAcademicDepartmentIntoDB,
  getAllAcademicDepartmentsFromDB,
  getSingleAcademicDepartmentFromDB,
  updateAcademicDepartmentIntoDB,
  deletedAcademicDepartmentFromDB,
};