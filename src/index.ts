import { createServer } from 'http';

import app from './api/app';
import sequelize from './util/db-connection';
import accessEnv from './util/access-env';

async function start(): Promise<void> {
  try {
    // database connection
    console.info('Initializing database connection...');
    await sequelize.authenticate();

    // express server
    const server = createServer(app);

    const port = accessEnv('PORT', '3000');
    server.listen(port);

    server.on('listening', () => {
      console.info(`OSRS Logs Services is listening on port ${port} in ${accessEnv('NODE_ENV')} mode`);
    });

    server.on('close', () => {
      sequelize.close();
      console.info('OSRS Logs Services closed.');
    });
  } catch (err) {
    console.error(err);
  }
}

start();
