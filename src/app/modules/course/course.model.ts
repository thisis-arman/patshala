import { Schema, model } from "mongoose";
import { TCourse, TPreRequisiteCourses } from "./course.interface";


const preRequisiteCoursesSchema = new Schema<TPreRequisiteCourses>(
  {
    course: {
      type: Schema.Types.ObjectId,
      ref: 'Course',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    _id: false,
  },
);


const courseSchema = new Schema<TCourse>({
    title: {
        type: String,
        required: [true, "Course title is required"],
        unique: true
    },
    prefix: {
        type: String,
    },
    code: {
        type: Number,
        required: [true, "Course code is required"],
        unique: true,
    },
    credits: {
        type: Number,
        required: [true, "Course credits is required"],

    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    preRequisiteCourses:[preRequisiteCoursesSchema]

},
    {
        timestamps:true,
    }
)


export const Course = model<TCourse>("Course",courseSchema)