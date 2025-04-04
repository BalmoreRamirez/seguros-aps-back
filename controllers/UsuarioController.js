// src/controllers/UsuarioRoutes.js
import usuarioService from '../services/UsuarioService.js';

const usuarioController = {
  async login(req, res) {
    try {
      const { user, password } = req.body;
      const token = await usuarioService.authenticate(user, password);
      res.json({ token });
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  },

  async createUser(req, res) {
    try {
      const { user, password, is_admin, complete_club, id_role } = req.body;
      const newUser = await usuarioService.createUser(
        user,
        password,
        is_admin,
        complete_club,
        id_role,
      );
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  async getAllUserManager(req, res) {
    try {
      const users = await usuarioService.getAllUserManager();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  async cambiarPassword(req, res) {
    try {
      const { userId, newPassword } = req.body;

      if (!userId || !newPassword) {
        return res
          .status(400)
          .json({ message: 'Se requiere ID de usuario y nueva contraseña' });
      }

      const resultado = await usuarioService.cambiarPassword(
        userId,
        newPassword,
      );
      res.json(resultado);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};

export default usuarioController;
