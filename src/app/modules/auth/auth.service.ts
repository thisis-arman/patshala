import { bcrypt } from 'bcrypt';
import httpStatus from "http-status";
import { AppError } from "../../errors/AppError";
import { User } from "../user/user.modal";
import { TAuth } from "./auth.interface";

const LoginUser = async (payload: TAuth) => {


    const user = await User.isUserExistsByCustomId(payload.id)

  if (!user) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      `User ${payload.id} does not exist`
    );
    }
    


    const isDeleted = user.isDeleted;
    if (isDeleted) { 
         throw new AppError(
           httpStatus.FORBIDDEN,
           `this User is already deleted`
         );
    }


    const isStatusBlocked = user.status === 'blocked';
    if (isStatusBlocked) { 
         throw new AppError(
           httpStatus.FORBIDDEN,
           `User is already blocked`
         );
    }



    const isPasswordMatched = await User.isPasswordMatched(payload.password,user.password);
    if (!isPasswordMatched) { 
         throw new AppError(
           httpStatus.BAD_REQUEST,
           `Password does not match`
         );
    }


};
