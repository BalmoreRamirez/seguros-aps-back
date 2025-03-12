// src/services/miembroService.js
import Miembro from '../models/Miembro.js';
import Club_miembros from '../models/Club_miembros.js';
import Club from '../models/Club.js';

const miembroService = {
  async createMiembro(id_club, data) {
    try {
      const clubExists = await Club.findByPk(id_club);

      if (!clubExists) {
        throw new Error('Club not found');
      }
      const dataInfo = {
        pago_seguro: false,
        ...data,
      };

      const miembro = await Miembro.create(dataInfo);
      await Club_miembros.create({
        id_club: id_club,
        id_miembro: miembro.id,
      });

      return miembro;
    } catch (e) {
      console.error('Error en createMiembro', e);
      throw e;
    }
  },
  async getMiembros(clubId) {
    const miembros = await Miembro.findAll({
      include: [
        {
          model: Club_miembros,
          where: { id_club: clubId },
        },
      ],
    });

    return miembros.map((miembro) => ({
      id: miembro.id,
      nombres: `${miembro.primer_nombre} ${miembro.segundo_nombre}`,
      apellidos: `${miembro.primer_apellido} ${miembro.segundo_apellido}`,
      edad: miembro.edad,
      telefono: miembro.telefono,
      seguro: miembro.pago_seguro,
    }));
  },
  async getMiembroById(id) {
    return await Miembro.findByPk(id);
  },
  async updateMiembro(id, data) {
    return await Miembro.update(data, { where: { id } });
  },
  async deleteMiembro(id) {
    try {
      await Club_miembros.destroy({
        where: {
          id_miembro: id,
        },
      });
      return await Miembro.destroy({
        where: {
          id,
        },
      });
    } catch (e) {
      console.error('Error en deleteMiembro', e);
      throw e;
    }
  },
  async updatePagoSeguro(id_club, id_miembros) {
    try {
      const members = await Club_miembros.findAll({
        where: {
          id_club,
          id_miembro: id_miembros,
        },
      });
      if (members.length !== id_miembros.length) {
        throw new Error('Algunos miembros no pertenecen al club especificado');
      }
      return await Miembro.update(
        { pago_seguro: true },
        {
          where: {
            id: id_miembros,
          },
        },
      );
    } catch (e) {
      console.error('Error al actualizar estados', e);
      throw e;
    }
  },
};

export default miembroService;
