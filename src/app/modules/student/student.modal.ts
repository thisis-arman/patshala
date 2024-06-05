import { Schema, model } from "mongoose";
import {
  StudentModel,
  TGuardian,
  TLocalGuardian,
  TStudent,
  TUserName,
} from "./student.interface";

const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, "First Name is required"],
    maxlength: [20, "First Name can not exceed 20 characters"],
    trim: true,
  },
  middleName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, "Last Name is required"],
    maxlength: [20, "First Name can not exceed 20 characters"],
    trim: true,
  },
});

const guardianSchema = new Schema<TGuardian>({
  fatherName: {
    type: String,
    required: [true, "Father Name is required"],
    maxlength: [20, "Father Name can not exceed 30 characters"],
    trim: true,
  },
  fatherOccupation: {
    type: String,
    required: [true, "Father Occupation is required"],
    trim: true,
  },
  fatherContactNo: {
    type: String,
    required: [true, "Father Contact No is required"],
    trim: true,
  },

  motherName: {
    type: String,
    required: [true, "mother Name is required"],
    maxlength: [20, "mother Name can not exceed 30 characters"],
    trim: true,
  },
  motherOccupation: {
    type: String,
    required: [true, "mother Occupation is required"],
    trim: true,
  },
  motherContactNo: {
    type: String,
    required: [true, "mother Contact No is required"],
    trim: true,
  },
});

const localGuardianSchema = new Schema<TLocalGuardian>({
  name: {
    type: String,
    required: [true, "Local Guardian's name is required"],
    trim: true,
  },
  occupation: {
    type: String,
    required: [true, "Occupation is required"],
    trim: true,
  },
  contactNo: {
    type: String,
    required: [true, "Contact No is required"],
    maxlength: [14, "Invalid Phone Number"],
    trim: true,
  },
  address: {
    type: String,
    required: [true, "Address is required"],
    trim: true,
  },
});

const studentSchema = new Schema<TStudent, StudentModel>(
  {
    id: {
      type: String,
      required: [true, "Id is required"],
      unique: true,
    },

    user: {
      type: Schema.Types.ObjectId,
      required: [true, "User Id is required"],
      unique: true,
      ref: "User",
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    name: userNameSchema,
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: [true, "Gender is required"],
    },
    dateOfBirth: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    contactNo: {
      type: String,
      required: [true, "Contact No is required"],
      trim: true,
    },
    emergencyContactNo: {
      type: String,
      required: [true, "Emergency Contact No is required"],
      trim: true,
    },
    bloodGroup: {
      type: String,
      enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    },
    presentAddress: {
      type: String,
      required: [true, "Present Address is required"],
    },
    permanentAddress: {
      type: String,
      required: [true, "Permanent Address is required"],
    },
    guardian: guardianSchema,
    localGuardian: localGuardianSchema,
    admissionSemester: {
      type: Schema.Types.ObjectId,
      required:true,
      ref: "AcademicSemester",
    },
    academicDepartment: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "AcademicDepartment",
    },
    profileImg: {
      type: String,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

studentSchema.statics.isUserExists = async function (id: string) {
  const existingUser = await Student.findOne({ id });
  return existingUser;
}



export default studentSchema;

export const Student = model<TStudent,StudentModel>("Student", studentSchema);


