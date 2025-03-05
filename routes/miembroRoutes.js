// src/routes/miembroRoutes.js
import { Router } from 'express';
import miembroController from '../controllers/miembroController.js';

const router = Router();

router.post('/miembros', miembroController.createMiembro);
router.get('/miembros/:id', miembroController.getMiembros);
router.get('/miembro/:id', miembroController.getMiembroById);
router.put('/miembros/:id', miembroController.updateMiembro);
router.delete('/miembros/:id', miembroController.deleteMiembro);
router.put('/updateMiembros', miembroController.updatePagoSeguro);

export default router;