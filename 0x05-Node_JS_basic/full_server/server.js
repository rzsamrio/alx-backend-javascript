import express from 'express';
import addRoutes from './routes/index.js';

const PORT = 1245;

const app = express();
addRoutes(app);
app.listen(PORT);

export default app;
