// src/routes/clubMiembrosRoutes.js
import { Router } from 'express';
import clubMiembrosController from '../controllers/clubMiembrosController.js';

const router = Router();

router.post('/club-miembros', clubMiembrosController.addMiembroToClub);
router.get('/club-miembros', clubMiembrosController.getClubMiembros);
router.get('/club-miembros/:id', clubMiembrosController.getClubMiembroById);
router.delete(
  '/club-miembros/:id',
  clubMiembrosController.removeMiembroFromClub,
);

export default router;
