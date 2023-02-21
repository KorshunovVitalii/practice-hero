'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Heroes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Heroes.init({
    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true
      }
    },
    realname: {
      field: 'real_name',
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true
      }
    },
    origindescription: {
      field: 'origin_description',
      type: DataTypes.STRING,
      allowNull: false
    },
    cathphrase: {
      field: 'cath_phrase',
      type: DataTypes.STRING,
      allowNull:false
    },
    pathimages: {
      field: 'path_image',
      type: DataTypes.TEXT,
    }
  }, {
    sequelize,
    modelName: 'Heroes',
    tableName: 'heroes',
    underscored: true
  });
  return Heroes;
};