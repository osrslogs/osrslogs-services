/* eslint-disable @typescript-eslint/explicit-function-return-type */

module.exports.up = (queryInterface, Sequelize) => {
  return queryInterface.createTable(
    'datapoints',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: new Sequelize.INTEGER(),
      },
      data: {
        allowNull: false,
        type: new Sequelize.STRING(),
      },
      playerId: {
        allowNull: false,
        references: {
          key: 'id',
          model: 'players',
        },
        type: new Sequelize.INTEGER(),
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

module.exports.down = queryInterface => queryInterface.dropTable('datapoints');
