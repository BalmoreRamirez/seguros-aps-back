// src/controllers/loginRoutes.js
import loginService from '../services/loginService.js';

const loginController = {
  async login(req, res) {
    try {
      const { user, password } = req.body;
      const token = await loginService.authenticate(user, password);
      res.json({ token });
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  },
  async createUser(req, res) {
    try {
      const { user, password, rol } = req.body;
      const newUser = await loginService.createUser(user, password, rol);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};

export default loginController;