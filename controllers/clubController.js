import clubService from '../services/clubService.js';

const clubController = {
  /**
   * Create a new club
   * @param req
   * @param res
   * @returns {Promise<*>}
   */
  async createClub(req, res) {
    try {
      const { nombre, iglesia, distrito, zona, pastor, id_usuario } = req.body;
      const club = await clubService.createClub({
        nombre,
        iglesia,
        distrito,
        zona,
        pastor,
        id_usuario,
      });
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
      const { idrol, idlogin } = req.params;
      const clubs = await clubService.getClubs(idrol, idlogin);
      res.json(clubs);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async getClubById(req, res) {
    try {
      const { id } = req.params;
      const club = await clubService.getClubById(id);
      res.json(club);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  async updateClub(req, res) {
    try {
      await clubService.updateClub(req.params.id, req.body);
      res.json({ message: 'Club actualizado' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  async deleteClub(req, res) {
    try {
      const club = await clubService.getClubById(req.params.id);
      const newEstado = !club.estado;
      await clubService.updateClub(req.params.id, { estado: newEstado });
      res.json({ ...club.toJSON(), estado: newEstado });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  async reporteGeneral(req, res) {
    try {
      const reporte = await clubService.reporteGeneral();
      res.json(reporte);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};

export default clubController;
