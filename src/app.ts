import express from 'express';
import sequelize from './config/database';
import dotenv from 'dotenv';
import cors from 'cors';

import apiRoutes from './routes/api';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

// Konfigurasi CORS
const allowedOrigins = ["http://localhost:8080"];
const corsOptions = {
  origin: allowedOrigins,
  credentials: true,
};
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Infokes WebEx Backend API',
  });
});

app.use('/api', apiRoutes);

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected successfully.");
    return sequelize.sync();
  })
  .then(() => {
    // Menjalankan server
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
})

export default app;