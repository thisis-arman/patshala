import express from 'express';
import Auth from '../../middlewares/Auth';
import { AuthController } from './auth.controller';


const router = express.Router();


router.post('/login',Auth(),AuthController.loginUser)


export const AuthRoutes = router;