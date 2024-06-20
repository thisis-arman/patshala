import express from 'express';
import Auth from '../../middlewares/Auth';
import { AuthController } from './auth.controller';
import { USER_ROLE } from '../user/user.constant';
import validateRequest from '../../middlewares/validateRequest';
import { AuthValidations } from './auth.validation';


const router = express.Router();


router.post('/login',validateRequest(AuthValidations.AuthValidation),AuthController.loginUser)

router.post(
  "/change-password",
  Auth(USER_ROLE.admin, USER_ROLE.faculty,USER_ROLE.student),
  validateRequest(AuthValidations.changePasswordValidation),
  AuthController.changePassword
);


export const AuthRoutes = router;