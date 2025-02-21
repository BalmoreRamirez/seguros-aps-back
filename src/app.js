import app from "./config/server.js";
import sequelize from "./config/database.js";
import loginRoutes from "./routes/loginRoutes.js";
import clubRoutes from './routes/clubRoutes.js';
import miembroRoutes from './routes/miembroRoutes.js';
import clubMiembrosRoutes from './routes/clubMiembrosRoutes.js';


const port = process.env.PORT || 3002;

app.use("/api", loginRoutes);
app.use('/api', clubRoutes);
app.use('/api', miembroRoutes);
app.use('/api', clubMiembrosRoutes);

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}).catch(err => {
  console.error("Unable to connect to the database:", err);
});