// src/controllers/dashboardController.js
import dashboardService from '../services/dashboardService.js';

const dashboardController = {
  async getEstadisticasPorClub(req, res) {
    try {
      const { id } = req.params;

      if (!Number.isInteger(Number(id))) {
        return res.status(400).json({ message: 'El ID del club debe ser un número entero' });
      }

      const estadisticas = await dashboardService.getEstadisticasPorClub(id);
      res.json(estadisticas);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async getEstadisticasGenerales(req, res) {
    try {
      const estadisticas = await dashboardService.getEstadisticasGenerales();
      res.json(estadisticas);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
};

export default dashboardController;