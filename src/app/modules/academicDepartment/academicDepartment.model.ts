import { Schema } from "mongoose";
import TAcademicDepartment from "./academicDepartment.interface";



const createAcademicDepartment = new Schema < TAcademicDepartment > ({
    name: {
        type: String,
        required: [true, "Department name is Required"],
        unique: true,
    },
    academicFaculty: {
        type: Schema.Types.ObjectId,
        required:[true,"Faculty is required"]
    }
})