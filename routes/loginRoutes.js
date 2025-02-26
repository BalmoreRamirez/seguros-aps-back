// src/routes/loginRoutes.js
import { Router } from 'express';
import loginController from '../controllers/loginController.js';

const router = Router();

router.post('/login', loginController.login);
router.post('/users', loginController.createUser);

export default router;