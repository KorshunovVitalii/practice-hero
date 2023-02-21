'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Heroes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nickname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      realname: {
        field: 'real_name',
        type: Sequelize.STRING,
        allowNull: false
      },
      origindescription: {
        field: 'origin_description',
        type: Sequelize.STRING,
        allowNull: false
      },
      cathphrase: {
        field: 'cath_phrase',
        type: Sequelize.STRING,
        allowNull: false
      },
      pathimages: {
        field: 'path_images',
        type: Sequelize.TEXT
      },
      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        field: 'updated_at',
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Heroes');
  }
};