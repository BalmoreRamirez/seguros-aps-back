// src/services/dashboardService.js
import Miembro from '../models/Miembro.js';
import Club_miembros from '../models/Club_miembros.js';
import Club from '../models/Club.js';

const dashboardService = {
  async getEstadisticasPorClub(clubId) {
    try {
      const clubExists = await Club.findByPk(clubId);
      if (!clubExists) {
        throw new Error('Club no encontrado');
      }

      // Obtener miembros del club
      const miembros = await Miembro.findAll({
        include: [
          {
            model: Club_miembros,
            where: { id_club: clubId },
            required: true,
          },
        ],
      });

      return {
        clubNombre: clubExists.nombre,
        estadisticas: this.calcularEstadisticas(miembros),
      };
    } catch (error) {
      console.error('Error en getEstadisticasPorClub:', error);
      throw error;
    }
  },

  async getEstadisticasGenerales() {
    try {
      // Obtener todos los miembros con su relación de club
      const miembros = await Miembro.findAll({
        include: [
          {
            model: Club_miembros,
            required: true,
          },
        ],
      });

      return {
        estadisticas: this.calcularEstadisticas(miembros),
      };
    } catch (error) {
      console.error('Error en getEstadisticasGenerales:', error);
      throw error;
    }
  },

  calcularEstadisticas(miembros) {
    const estadisticas = {
      aventurero: { total: 0, conSeguro: 0, sinSeguro: 0 },
      conquistador: { total: 0, conSeguro: 0, sinSeguro: 0 },
      guiaMayor: { total: 0, conSeguro: 0, sinSeguro: 0 },
      ja: { total: 0, conSeguro: 0, sinSeguro: 0 },
      consejero: { total: 0, conSeguro: 0, sinSeguro: 0 }, // Nueva categoría
      noAsignado: { total: 0, conSeguro: 0, sinSeguro: 0 },
      total: { total: 0, conSeguro: 0, sinSeguro: 0 },
    };

    miembros.forEach((miembro) => {
      // Verificar que miembro y miembro.tipo existen
      if (!miembro || !miembro.tipo) {
        // Contar como "no asignado" si no tiene tipo
        estadisticas.noAsignado.total++;
        estadisticas.total.total++;

        // Verificar el pago de seguro aunque no tenga tipo asignado
        if (miembro && miembro.pago_seguro) {
          estadisticas.noAsignado.conSeguro++;
          estadisticas.total.conSeguro++;
        } else {
          estadisticas.noAsignado.sinSeguro++;
          estadisticas.total.sinSeguro++;
        }
        return;
      }

      const tipo = miembro.tipo.toLowerCase();
      let categoria;

      if (tipo.includes('aventurero')) {
        categoria = 'aventurero';
      } else if (tipo.includes('conquistador')) {
        categoria = 'conquistador';
      } else if (tipo.includes('guia') || tipo.includes('guía')) {
        categoria = 'guiaMayor';
      } else if (tipo.includes('ja')) {
        categoria = 'ja';
      } else if (tipo.includes('consejero')) {
        // Añadir detección del nuevo tipo
        categoria = 'consejero';
      } else {
        categoria = 'noAsignado';
      }

      // Incrementar contadores
      estadisticas[categoria].total++;
      estadisticas.total.total++;

      if (miembro.pago_seguro) {
        estadisticas[categoria].conSeguro++;
        estadisticas.total.conSeguro++;
      } else {
        estadisticas[categoria].sinSeguro++;
        estadisticas.total.sinSeguro++;
      }
    });

    return estadisticas;
  },
};

export default dashboardService;
