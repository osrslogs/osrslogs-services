import { Sequelize } from 'sequelize';

import accessEnv from './access-env';

const sequelize = new Sequelize(accessEnv('POSTGRES_DB'), accessEnv('POSTGRES_USER'), accessEnv('POSTGRES_PASSWORD'), {
  host: accessEnv('DB_HOST'),
  dialect: 'postgres',
  dialectOptions: {
    charset: 'utf8',
    multipleStatements: true,
  },
  logging: false,
});

export default sequelize;
