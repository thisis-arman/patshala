import TFaculty from "./faculty.interface";
import { Faculty } from "./faculty.model"



const getAllFacultiesFromDB = async(query: Record<string, unknown>) => {
    
    const result = await Faculty.find();
    return result;

    
}

const getSingleFacultyFromDB = async(id: string) => {
    
    const result = await Faculty.findOne({id});
    return result;   
}

const updateFacultyIntoDB = async(id: string,payload:Partial<TFaculty>) => {
    
    const result = await Faculty.findOneAndUpdate({id},{payload});
    return result;   
}

const deleteFacultyFromDB = async(id: string) => {
    
    const result = await Faculty.findOneAndUpdate({id},{isDeleted: true});
    return result;   
}



export const facultyServices = {
    getAllFacultiesFromDB,
    getSingleFacultyFromDB,
    updateFacultyIntoDB,
    deleteFacultyFromDB,


}