// src/controllers/miembroController.js
import miembroService from '../services/miembroService.js';

const miembroController = {
  async createMiembro(req, res) {
    try {
      const miembro = await miembroService.createMiembro(req.body);
      res.status(201).json(miembro);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  async getMiembros(req, res) {
    try {
      const miembros = await miembroService.getMiembros();
      res.json(miembros);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  async getMiembroById(req, res) {
    try {
      const miembro = await miembroService.getMiembroById(req.params.id);
      res.json(miembro);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  async updateMiembro(req, res) {
    try {
      await miembroService.updateMiembro(req.params.id, req.body);
      res.status(204).end();
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  async deleteMiembro(req, res) {
    try {
      await miembroService.deleteMiembro(req.params.id);
      res.status(204).end();
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};

export default miembroController;