import { TAcademicSemester } from "../academicSemester/academicSemester.interface";
import { User } from "./user.modal";

const findLastStudentId = async () => {
  const lastStudent = await User.findOne({ role: "student" }, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean();

  return lastStudent?.id ? lastStudent.id : undefined;
};

export const generateStudentId = async (payload: TAcademicSemester) => {
  const lastStudentId = await findLastStudentId();

  const currentSemesterYear = payload.year;
  const currentSemesterCode = payload.code;

  let currentId = "0000";

  if (lastStudentId) {
    const lastStudentYear = Number(lastStudentId.substring(0, 4));
    const lastStudentCode = lastStudentId.substring(4, 6);
    const lastStudentNumber = lastStudentId.substring(6);

    if (
      lastStudentYear === currentSemesterYear &&
      lastStudentCode === currentSemesterCode
    ) {
      currentId = (Number(lastStudentNumber) + 1).toString().padStart(4, "0");
    } else {
      currentId = "0001";
    }
  } else {
    currentId = "0001";
  }

  const newStudentId = `${currentSemesterYear}${currentSemesterCode}${currentId}`;

  return newStudentId;
};
