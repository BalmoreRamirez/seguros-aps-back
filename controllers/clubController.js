// src/controllers/clubController.js
import clubService from "../services/clubService.js";

const clubController = {
  async createClub(req, res) {
    try {
      const { iglesia, distrito, zona, direccion, pastor, loginId } = req.body;
      const club = await clubService.createClub({ iglesia, distrito, zona, direccion, pastor, loginId });
      res.status(201).json(club);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  /**
   * Get all clubs by loginId
   * @param req
   * @param res
   * @returns {Promise<*>}
   */
  async getClubs(req, res) {
    try {
      let estadoButton;
      const { idrol, idlogin } = req.params;
      const clubs = await clubService.getClubs(idrol, idlogin);
       if (clubs.length>=1 && idrol !== 1){
        estadoButton = false;
       }else if ((clubs.length>=1 && idrol === 1)||(clubs.length===0 && idrol !== 1)){
        estadoButton = true;
       }
      res.json({ clubs, estadoButton });
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
  }
};

export default clubController;