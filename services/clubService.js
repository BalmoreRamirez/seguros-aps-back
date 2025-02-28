// src/services/clubService.js
import Club from "../models/Club.js";

const clubService = {
  async createClub(data) {
    return await Club.create(data);
  },
  /**
   * Get all clubs by loginId
   * @param idClub
   * @returns {Promise<*>}
   */
  async getClubs(idrol, idlogin) {
    let id_rol = parseInt(idrol);
    const id_login = parseInt(idlogin);

    try {
      if (id_rol === 1) {
        return await Club.findAll();
      } else {
        return await Club.findAll({
          where: { loginId: id_login }
        });
      }
    } catch (e) {
      console.log(e);
    }
  },
  async getClubById(id) {
    return await Club.findByPk(id);
  },
  async updateClub(id, data) {
    return await Club.update(data, { where: { id } });
  },
  async deleteClub(id) {
    return await Club.destroy({ where: { id } });
  }
};

export default clubService;