import TAcademicFaculty from "./academicFaculty.interface";
import { AcademicFaculty } from "./academicFaculty.model";



const createAcademicFacultyIntoDB = async (payload:TAcademicFaculty) => {
    const result = await AcademicFaculty.create(payload);
    return result;
}

const getAcademicFacultiesFromDB = async () => {
    const result = await AcademicFaculty.find({});
    return result;
}
const getSingleAcademicFacultyFromDB = async (_id:string) => {
    const result = await AcademicFaculty.findOne({_id});
    return result;
}

const updateAcademicFacultyFromDB = async (_id:string,payload:TAcademicFaculty) => {
    const result = await AcademicFaculty.findByIdAndUpdate({_id}{payload});
    return result;
}
const deleteAcademicFacultyFromDB = async (_id:string,payload:TAcademicFaculty) => {
    const result = await AcademicFaculty.findByIdAndUpdate({_id},{payload});
    return result;
}



export const academicFacultyServices = {
    createAcademicFacultyIntoDB,
    getAcademicFacultiesFromDB,
    getSingleAcademicFacultyFromDB,
    updateAcademicFacultyFromDB,

}