import mongoose from "mongoose";
import { TStudent } from "./student.interface";
import { Student } from "./student.modal";
import httpStatus from "http-status";
import { User } from "../user/user.modal";
import { populate } from "dotenv";

const getAllStudentsFromDB = async () => {
  const result = await Student.find({})
    .populate("admissionSemester")
    .populate({
      path: "academicDepartment",
      populate: {
        path: "academicFaculty",
      },
    });
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

const deleteSingleStudentIntoDB = async (id: string) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    const deletedStudent = await Student.findOneAndUpdate(
      { id },
      { isDeleted: true },
      {
        new: true,
        session,
      }
    );

    if (!deletedStudent) {
      throw new AppError(httpStatus.BAD_REQUEST, "Student Deletion failed");
    }

    const deletedUser = await User.findOneAndUpdate(
      {
        id,
      },
      {
        isDeleted: true,
      },
      {
        new: true,
        session,
      }
    );

    if (!deletedUser) {
      throw new AppError(httpStatus.BAD_REQUEST, "Student Deletion failed");
    }
    session.commitTransaction();
    session.endSession();

    return deletedStudent;
  } catch (error) {
    session.abortTransaction();
    session.endSession();
    throw new AppError(httpStatus.BAD_REQUEST, "Student Deletion failed");
  }
};

export const studentServices = {
  getAllStudentsFromDB,
  updateStudentIntoDB,
  getSingleStudentFromDB,
  deleteSingleStudentIntoDB,
};
