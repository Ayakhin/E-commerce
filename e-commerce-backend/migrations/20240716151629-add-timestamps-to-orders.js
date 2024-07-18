'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Vérifier si la colonne 'createdAt' n'existe pas déjà
    const ordersTableInfo = await queryInterface.describeTable('Orders');
    if (!ordersTableInfo['createdAt']) {
      await queryInterface.addColumn('Orders', 'createdAt', {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      });
    }

    // Vérifier si la colonne 'updatedAt' n'existe pas déjà
    if (!ordersTableInfo['updatedAt']) {
      await queryInterface.addColumn('Orders', 'updatedAt', {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      });
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Orders', 'createdAt');
    await queryInterface.removeColumn('Orders', 'updatedAt');
  }
};
