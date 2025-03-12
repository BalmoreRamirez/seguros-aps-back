// src/services/clubService.js
import Club from '../models/Club.js';
import Usuario from '../models/Usuario.js';

const clubService = {
  async createClub(data) {
    try {
      const { nombre, iglesia, distrito, zona, pastor, id_usuario } = data;
      const usuario = await Usuario.findByPk(id_usuario);
      const response = await Club.create({
        nombre,
        iglesia,
        distrito,
        zona,
        pastor,
        id_usuario: id_usuario,
      });
      await usuario.update({ complete_club: true });
      return response;
    } catch (e) {
      console.error('Error en create Club', e);
    }
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
          where: { id_usuario: id_login },
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
    return await Club.update({ estado: false }, { where: { id: id } });
  },
};

export default clubService;
