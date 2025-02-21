// src/routes/miembroRoutes.js
import { Router } from 'express';
import miembroController from '../controllers/miembroController.js';

const router = Router();

router.post('/miembros', miembroController.createMiembro);
router.get('/miembros', miembroController.getMiembros);
router.get('/miembros/:id', miembroController.getMiembroById);
router.put('/miembros/:id', miembroController.updateMiembro);
router.delete('/miembros/:id', miembroController.deleteMiembro);

export default router;