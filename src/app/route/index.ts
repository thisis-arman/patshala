
import { UserRoutes } from './../modules/user/user.route';
import express from 'express';


const router = express.Router()

const modulesRoutes = [{
    path: '/users',
    route:UserRoutes
}]


modulesRoutes.forEach((route :string)=> router.use(route.path , route.route));