import { TAcademicSemester } from "./academicSemester.interface";
import { AcademicSemester } from "./academicSemester.modal";

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
  const semesterCodeMapper = {
    Autumn: "01",
    Summer: "02",
    Fall: "03",
  };
  if (semesterCodeMapper[payload.name] !== payload.code) {
    throw new Error("Invalid semester code");
  }
  const semester = await AcademicSemester.create(payload);
  return semester;
};

const getAcademicSemestersFromDB = async () => {
  const result = await AcademicSemester.find({});
  return result;
};
const getSingleAcademicSemesterFromDB = async (_id:string) => {
  const result = await AcademicSemester.findOne({_id});
  return result;
};
const updateAcademicSemesterIntoDB = async (_id,) => {
  const result = await AcademicSemester.findByIdAndUpdate({_id});
  return result;
};

export const academicSemesterServices = {
  createAcademicSemesterIntoDB,
  getAcademicSemestersFromDB,
  getSingleAcademicSemesterFromDB,
};
