// src/services/loginService.js
import jwt from 'jsonwebtoken';
import Login from '../models/Login.js';
import bcrypt from 'bcrypt';

const loginService = {
  async authenticate(user, password) {
    const login = await Login.findOne({ where: { user } });
    if (!login || !bcrypt.compareSync(password, login.password)) {
      throw new Error('Invalid credentials');
    }
    const token = jwt.sign({ id: login.id, rol: login.rol }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
  },

  async createUser(user, password, rol) {
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = await Login.create({ user, password: hashedPassword, rol });
    return newUser;
  },
};

export default loginService;