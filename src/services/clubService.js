// src/services/clubService.js
import Club from '../models/Club.js';

const clubService = {
  async createClub(data) {
    return await Club.create(data);
  },
  async getClubs() {
    return await Club.findAll();
  },
  async getClubById(id) {
    return await Club.findByPk(id);
  },
  async updateClub(id, data) {
    return await Club.update(data, { where: { id } });
  },
  async deleteClub(id) {
    return await Club.destroy({ where: { id } });
  },
};

export default clubService;