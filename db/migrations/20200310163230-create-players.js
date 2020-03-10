/* eslint-disable @typescript-eslint/explicit-function-return-type */

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('players', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: new Sequelize.INTEGER(),
      },
      name: {
        allowNull: false,
        type: new Sequelize.STRING(),
      },
      mode: {
        allowNull: false,
        type: new Sequelize.STRING(),
      },
      status: {
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
    });
  },

  down: queryInterface => {
    queryInterface.dropTable('players');
  },
};
