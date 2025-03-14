// src/services/clubService.js
import Club from '../models/Club.js';
import Usuario from '../models/Usuario.js';
import club_miembros from '../models/Club_miembros.js';
import Miembro from '../models/Miembro.js';

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
   * @returns {Promise<*>}
   * @param idrol
   * @param idlogin
   */
  async getClubs(idrol, idlogin) {
    let id_rol = parseInt(idrol);
    const id_login = parseInt(idlogin);
    const respuesta = [];
    try {
      if (id_rol === 1) {
        const datos = await Club.findAll();
        for (const club of datos) {
          const totalMiembro = await club_miembros.findAll({
            where: { id_club: club.id },
          });
          const pagados = await club_miembros.findAll({
            where: { id_club: club.id },
            include: [{ model: Miembro, where: { pago_seguro: true } }],
          });
          respuesta.push({
            id: club.id,
            nombre: club.nombre,
            iglesia: club.iglesia,
            distrito: club.distrito,
            zona: club.zona,
            pastor: club.pastor,
            miembros: totalMiembro.length || 0,
            pagados: pagados.length || 0,
            pendientes: totalMiembro.length - pagados.length || 0,
            estado: club.estado,
          });
        }
        return respuesta;
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
