// src/routes/dashboardRoutes.js
import { Router } from 'express';
import dashboardController from '../controllers/dashboardController.js';

const router = Router();

router.get('/dashboard/clubes/:id', dashboardController.getEstadisticasPorClub);
router.get('/dashboard/general', dashboardController.getEstadisticasGenerales);

export default router;
