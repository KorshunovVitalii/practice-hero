'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Powers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Powers.belongsToMany(models.Heroes, {
        through: 'hero_powers',
        foreignKey: 'powerId'
      })
    }
  }
  Powers.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Powers',
    tableName: 'powers',
    underscored: true
  });
  return Powers;
};