import { Router } from 'express';
import usuarioController from '../controllers/UsuarioController.js';

const router = Router();

router.post('/login', usuarioController.login);
router.post('/users', usuarioController.createUser);
router.get('/users', usuarioController.getAllUserManager);

export default router;
