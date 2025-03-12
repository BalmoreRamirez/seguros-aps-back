import clubMiembrosService from '../services/clubMiembrosService.js';

const clubMiembrosController = {
  async addMiembroToClub(req, res) {
    try {
      const clubMiembro = await clubMiembrosService.addMiembroToClub(req.body);
      res.status(201).json(clubMiembro);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  async getClubMiembros(req, res) {
    try {
      const clubMiembros = await clubMiembrosService.getClubMiembros();
      res.json(clubMiembros);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  async getClubMiembroById(req, res) {
    try {
      const clubMiembro = await clubMiembrosService.getClubMiembroById(
        req.params.id,
      );
      res.json(clubMiembro);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  async removeMiembroFromClub(req, res) {
    try {
      await clubMiembrosService.removeMiembroFromClub(req.params.id);
      res.status(204).end();
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};

export default clubMiembrosController;
