import { TAcademicSemester } from "./academicSemester.interface";
import { AcademicSemester } from "./academicSemester.modal";



const createAcademicSemesterIntoDB = async (semesterInfo:TAcademicSemester) => {
    
    const semester = await AcademicSemester.create(semesterInfo);
    return semester;

}


export const academicSemesterServices = {
    createAcademicSemesterIntoDB,
}