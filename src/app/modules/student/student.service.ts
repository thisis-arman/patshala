import { TStudent } from "./student.interface";
import { Student } from "./student.modal";

const getAllStudentsFromDB = async () => {
  const result = await Student.find({});
  return result;
};

const getSingleStudentFromDB = async (_id: string) => {
  const result = await Student.findOne({ _id });
  return result;
};

const updateStudentIntoDB = async (_id: string, payload: Partial<TStudent>) => {
  const { name, guardian, localGuardian, ...restOfStudentInfo } = payload;

  const modifiedUpdatedData: Record<string, unknown> = {
    ...restOfStudentInfo,
  };

  if (name && Object.keys(name).length) {
    for (const [key, value] of Object.entries(name)) {
      modifiedUpdatedData[`name.${key}`] = value;
    }
  }
  if (guardian && Object.keys(guardian).length) {
    for (const [key, value] of Object.entries(guardian)) {
      modifiedUpdatedData[`guardian.${key}`] = value;
    }
  }
  if (localGuardian && Object.keys(localGuardian).length) {
    for (const [key, value] of Object.entries(localGuardian)) {
      modifiedUpdatedData[`locaGuardian.${key}`] = value;
    }
  }

  const result = await Student.findByIdAndUpdate({ _id }, { payload });
  return result;
};

const deleteSingleStudentIntoDB = async (_id: string) => {
  const result = await Student.findByIdAndUpdate({ _id }, { isDeleted: true });
  return result;
};

export const studentServices = {
  getAllStudentsFromDB,
  updateStudentIntoDB,
  getSingleStudentFromDB,
  deleteSingleStudentIntoDB,
};
