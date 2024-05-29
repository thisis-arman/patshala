import { TStudent } from './../student/student.interface';
import { NextFunction, Request, Response } from "express";
import { User } from "./user.modal";
import { UserServices } from "./user.service";



const createStudent = async (req: Request, res: Response,next:NextFunction) => {
    try {

        const {password,studentData} = req.body;
        const result = await UserServices.createStudentInfoDB(password,studentData);
         res.status(200).json({
            success: true,
             message: "Student created successfully",
             data: result,
        })
        
    } catch (error :any) {
        next(error)
    }
}



export const UserControllers = {
    createStudent
}