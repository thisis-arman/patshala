import TAcademicDepartment from "./academicDepartment.interface";
import { AcademicDepartment } from "./academicDepartment.model";

const createAcademicDepartment = async (payload: TAcademicDepartment) => {
  const result = await AcademicDepartment.create(payload);
  return result;
};


const getAllAcademicDepartments = async () => {
  const result = await AcademicDepartment.find({});
  return result;
};

const getSingleAcademicDepartment = async (_id: TAcademicDepartment) => {
    const result = await AcademicDepartment.findOne({ _id });
    return result;
}

const updateAcademicDepartment = async (_id:string,payload: Partial<TAcademicDepartment>) => {
  const result = await AcademicDepartment.findOne({ _id },{payload});
  return result;
};

const deletedAcademicDepartment = async () => {
    
}