import { Router } from 'express';
import miembroController from '../controllers/miembroController.js';

const router = Router();

router.post('/miembros', miembroController.createMiembro);
router.get('/miembros/:id', miembroController.getMiembros);
router.get('/miembro/:id', miembroController.getMiembroById);
router.put('/miembro/:id', miembroController.updateMiembro);
router.delete('/miembro/:id', miembroController.deleteMiembro);
router.put('/updateMiembros', miembroController.updatePagoSeguro);

export default router;
