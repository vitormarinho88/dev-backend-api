'use strict';

const { Sequelize } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    
    await queryInterface.addColumn('categories', 'path', { 
    type: Sequelize.STRING, 
  });
     
  },

  async down (queryInterface) {
    
    await queryInterface.removeColumn('categories', 'path');
     
    
  }
};
