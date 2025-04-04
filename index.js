import app from './config/server.js';
import sequelize from './config/database.js';
import loginRoutes from './routes/UsuarioRoutes.js';
import clubRoutes from './routes/clubRoutes.js';
import miembroRoutes from './routes/miembroRoutes.js';
import clubMiembrosRoutes from './routes/clubMiembrosRoutes.js';
import dashboardRoutes from './routes/dashboardRoutes.js';

const port = process.env.PORT || 3002;

app.get('/', (req, res) => {
  res.send('Bienvenidos a mi API');
});

app.use('/api', loginRoutes);
app.use('/api', clubRoutes);
app.use('/api', miembroRoutes);
app.use('/api', clubMiembrosRoutes);
app.use('/api', dashboardRoutes);

sequelize
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
      console.log(`MODO: ${process.env.MODE}`);
    });
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

(async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log('Tablas sincronizadas');
  } catch (err) {
    console.error('No se pudo sincronizar las tablas:', err);
  }
})();
