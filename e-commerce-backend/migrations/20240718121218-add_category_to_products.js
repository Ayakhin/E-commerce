'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Products', 'category', {
      type: Sequelize.STRING,
      allowNull: true, // Permet les valeurs NULL temporairement
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Products', 'category', {
      type: Sequelize.STRING,
      allowNull: false, // Revenir à NOT NULL dans la migration de retour
    });
  }
};
