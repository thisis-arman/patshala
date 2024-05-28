import { TStudent } from './../student/student.interface';
import { Request, Response } from "express";
import { User } from "./user.modal";
import { UserServices } from "./user.service";



const createStudent = async (req: Request, res: Response) => {
    try {

        const {password,student} = req.body;
        const result = await UserServices.createStudentInfoDB(password,student);
         res.status(200).json({
            success: true,
             message: "Student created successfully",
             data: result,
        })
        
    } catch (error :any) {
        res.status(500).json({
            success: false,
            message: error.message || "something went wrong",
            error: error
        })
    }
}



export const UserControllers = {
    createStudent
}