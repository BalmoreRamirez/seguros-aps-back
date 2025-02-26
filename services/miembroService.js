// src/services/miembroService.js
import Miembro from "../models/Miembro.js";
import Club_miembros from "../models/Club_miembros.js";

const miembroService = {
  async createMiembro(data, clubId) {
    const miembro = await Miembro.create(data);
    await Club_miembros.create({
      id_club: clubId,
      id_miembro: miembro.id
    });
    return miembro;
  },

  async getMiembros(clubId) {
    const miembros = await Miembro.findAll({
      include: [{
        model: Club_miembros,
        where: { id_club: clubId }
      }]
    });

    return miembros.map(miembro => ({
      id: miembro.id,
      nombre: `${miembro.nombres} ${miembro.apellidos}`,
      edad: miembro.edad,
      telefono: miembro.telefono,
      seguro: miembro.pago_seguro
    }));
  },
  async getMiembroById(id) {
    return await Miembro.findByPk(id);
  },
  async updateMiembro(id, data) {
    return await Miembro.update(data, { where: { id } });
  },
  async deleteMiembro(id) {
    return await Miembro.destroy({ where: { id } });
  }
};

export default miembroService;