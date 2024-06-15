import express from 'express';
import Auth from '../../middlewares/Auth';
import { AuthController } from './auth.controller';
import { USER_ROLE } from '../user/user.constant';


const router = express.Router();


router.post('/login',Auth(USER_ROLE.admin),AuthController.loginUser)


export const AuthRoutes = router;