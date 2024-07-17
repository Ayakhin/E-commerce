'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Si vous devez ajouter des colonnes
    // Assurez-vous que la colonne n'existe pas déjà
    await queryInterface.addColumn('Orders', 'createdAt', {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    });
    await queryInterface.addColumn('Orders', 'updatedAt', {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Revenir en arrière si nécessaire
    await queryInterface.removeColumn('Orders', 'createdAt');
    await queryInterface.removeColumn('Orders', 'updatedAt');
  }
};
