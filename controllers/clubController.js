// src/controllers/clubController.js
import clubService from '../services/clubService.js';

const clubController = {
  async createClub(req, res) {
    try {
      const club = await clubService.createClub(req.body);
      res.status(201).json(club);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  async getClubs(req, res) {
    try {
      const clubs = await clubService.getClubs();
      res.json(clubs);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  async getClubById(req, res) {
    try {
      const club = await clubService.getClubById(req.params.id);
      res.json(club);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  async updateClub(req, res) {
    try {
      await clubService.updateClub(req.params.id, req.body);
      res.status(204).end();
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  async deleteClub(req, res) {
    try {
      await clubService.deleteClub(req.params.id);
      res.status(204).end();
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};

export default clubController;