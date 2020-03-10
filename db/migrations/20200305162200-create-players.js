/* eslint-disable @typescript-eslint/explicit-function-return-type */

module.exports.up = (queryInterface, Sequelize) => {
  return queryInterface.createTable(
    'players',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: new Sequelize.INTEGER(),
      },
      uuid: {
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        type: Sequelize.UUID,
      },
      name: {
        allowNull: false,
        type: new Sequelize.STRING(),
      },
      createdAt: {
        allowNull: false,
        type: new Sequelize.DATE(),
      },
      updatedAt: {
        allowNull: false,
        type: new Sequelize.DATE(),
      },
      deletedAt: {
        allowNull: true,
        type: new Sequelize.DATE(),
      },
    },
    {
      charset: 'utf8',
    },
  );
};

module.exports.down = queryInterface => queryInterface.dropTable('players');
