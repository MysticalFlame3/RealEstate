import express from 'express'
import { signup } from '../controllers/auth.controler.js';
const route = express.Router();
route.post('/signup',signup);
export default route;
