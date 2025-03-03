// src/services/miembroService.js
import Miembro from "../models/Miembro.js";
import Club_miembros from "../models/Club_miembros.js";
import Club from "../models/Club.js";

const miembroService = {
  async createMiembro(id_club, data) {
    try {
      const clubExists = await Club.findByPk(id_club);

      if (!clubExists) {
        throw new Error("Club not found");
      }

      const miembro = await Miembro.create(data);
      await Club_miembros.create({
        id_club: id_club,
        id_miembro: miembro.id
      });

      return miembro;
    } catch (e) {
      console.error("Error en createMiembro", e);
      throw e;
    }
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
      nombres: `${miembro.primer_nombre} ${miembro.segundo_nombre}`,
      apellidos: `${miembro.primer_apellido} ${miembro.segundo_apellido}`,
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