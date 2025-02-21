// src/services/miembroService.js
import Miembro from '../models/Miembro.js';

const miembroService = {
  async createMiembro(data) {
    return await Miembro.create(data);
  },
  async getMiembros() {
    return await Miembro.findAll();
  },
  async getMiembroById(id) {
    return await Miembro.findByPk(id);
  },
  async updateMiembro(id, data) {
    return await Miembro.update(data, { where: { id } });
  },
  async deleteMiembro(id) {
    return await Miembro.destroy({ where: { id } });
  },
};

export default miembroService;