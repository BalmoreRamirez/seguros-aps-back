import { Router } from 'express';
import clubController from '../controllers/clubController.js';

const router = Router();

router.post('/clubs', clubController.createClub);
router.get('/clubs/:idrol/:idlogin', clubController.getClubs);
router.get('/club/:id', clubController.getClubById);
router.put('/clubs/:id', clubController.updateClub);
router.put('/club/:id', clubController.deleteClub);

export default router;
