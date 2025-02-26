
// src/routes/clubRoutes.js
import { Router } from 'express';
import clubController from '../controllers/clubController.js';

const router = Router();

router.post('/clubs', clubController.createClub);
router.get('/clubs', clubController.getClubs);
router.get('/clubs/:id', clubController.getClubById);
router.put('/clubs/:id', clubController.updateClub);
router.delete('/clubs/:id', clubController.deleteClub);

export default router;