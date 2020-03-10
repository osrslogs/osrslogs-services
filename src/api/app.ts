import express from 'express';

import initRestRoutes from './routes';

const app = express();

initRestRoutes(app);

export default app;
