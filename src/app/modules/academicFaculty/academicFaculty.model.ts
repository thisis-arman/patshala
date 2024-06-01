import { Schema, model } from "mongoose";
import TAcademicFaculty from "./academicFaculty.interface";

const createAcademicFacultySchema = new Schema<TAcademicFaculty>({
  name: {
    type: String,
    required: [true, "Faculty Name must be String"],
    unique: true,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    }
}, {
    timestamps: true,
}
);


export const academicFacultySchemas = {
    createAcademicFacultySchema,
}

export const AcademicFaculty = model<TAcademicFaculty>("AcademicFaculty",createAcademicFacultySchema)