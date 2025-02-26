// src/controllers/miembroController.js
import miembroService from "../services/miembroService.js";
import Club from "../models/Club.js";

const miembroController = {
  async createMiembro(req, res) {
    try {
      const { clubId, ...miembroData } = req.body;
      const miembro = await miembroService.createMiembro(miembroData, clubId);
      res.status(201).json(miembro);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getMiembros(req, res) {
    try {
      const { id } = req.params;
      // Check if id is an integer
      if (!Number.isInteger(Number(id))) {
        return res.status(400).json({ message: "Club ID must be an integer" });
      }

      // Verify if the club exists
      const clubExists = await Club.findByPk(id);
      if (!clubExists) {
        return res.status(404).json({ message: "Club not found" });
      }

      const miembros = await miembroService.getMiembros(id);
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
  }
};

export default miembroController;