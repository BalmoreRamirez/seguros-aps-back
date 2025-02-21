// src/services/clubMiembrosService.js
import Club_miembros from '../models/Club_miembros.js';

const clubMiembrosService = {
  async addMiembroToClub(data) {
    return await Club_miembros.create(data);
  },
  async getClubMiembros() {
    return await Club_miembros.findAll();
  },
  async getClubMiembroById(id) {
    return await Club_miembros.findByPk(id);
  },
  async removeMiembroFromClub(id) {
    return await Club_miembros.destroy({ where: { id } });
  },
};

export default clubMiembrosService;