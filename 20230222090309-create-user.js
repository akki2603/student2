'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      rollno: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER
      },
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
         
    },
   
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('users');
  }
};