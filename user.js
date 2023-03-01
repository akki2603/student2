'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    uuid:{
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
    },
    name: {
     type: DataTypes.STRING,
     allowNull: false,
     validate:{
      notEmpty:{
        msg: 'Name cannot be empty',
      },
      len:{
        args:[3,30],
        msg: 'name length limit exceeded',
       },
     },
    
    
    },
    

    age:{

    type: DataTypes.INTEGER,
    allowNull: false,
  validate:{
    notEmpty:{
      msg: 'Age cannot be empty',
    },
    isInt:{
      msg: 'Age must be an integer',
    },
    max:{
      args:[150],
      msg: 'Max must be an valid'
    },
    min:{
      args:[10],
      msg:'age should not be less than 10'
    },


  },



    },
    gender: {
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        isIn: {
          args: [['male', 'female','other','MALE','FEMALE','OTHER']],
          msg: "choose valid gender"
        }

       },
 }

}, {
    sequelize,
    tableName:'users',
    modelName: 'User',
  });
  return User;
};