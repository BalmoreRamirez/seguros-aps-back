import jwt from 'jsonwebtoken';
import Usuario from '../models/Usuario.js';
import Club from '../models/Club.js';
import bcrypt from 'bcrypt';

const usuarioService = {
  async authenticate(user, password) {
    const login = await Usuario.findOne({ where: { user } });

    if (!login) {
      throw new Error('Credenciales no válidas');
    }
    if (!bcrypt.compareSync(password, login.password)) {
      throw new Error('Credenciales no válidas');
    }

    if (!login.is_admin) {
      const club = await Club.findOne({ where: { id_usuario: login.id } });
      if (club && club.estado === false) {
        throw new Error('Club no activo consulte al administrador');
      }
    }

    const token = jwt.sign(
      {
        id: login.id,
        id_role: login.id_role,
        is_admin: login.is_admin,
        complete_club: login.complete_club,
      },
      process.env.JWT_SECRET,
      { expiresIn: '1h' },
    );
    return token;
  },

  async createUser(user, password, is_admin, complete_club, id_role) {
    // Verificar si el usuario ya existe
    const existingUser = await Usuario.findOne({ where: { user } });
    if (existingUser) {
      throw new Error(
        'El nombre de usuario ya está en uso. Por favor elija otro.',
      );
    }

    // Si no existe, proceder a crear el usuario
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = await Usuario.create({
      user,
      password: hashedPassword,
      is_admin,
      complete_club,
      id_role,
    });
    return newUser;
  },
  async getAllUserManager() {
    return await Usuario.findAll({
      where: { is_admin: false, id_role: 2 },
    });
  },
  async cambiarPassword(userId, newPassword) {
    // Verificar que el usuario existe
    const usuario = await Usuario.findByPk(userId);
    if (!usuario) {
      throw new Error('Usuario no encontrado');
    }

    // Hash de la nueva contraseña
    const hashedPassword = bcrypt.hashSync(newPassword, 10);

    // Actualizar la contraseña
    await usuario.update({ password: hashedPassword });

    return { message: 'Contraseña actualizada correctamente' };
  },
};

export default usuarioService;
