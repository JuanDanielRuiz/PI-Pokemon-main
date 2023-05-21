const { DataTypes } = require('sequelize');




// 
// 📍 MODELO 2 | Type
// ID. *
// Nombre. *

// 
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('type', {

    id: {
      type:DataTypes.UUID,
      allowNull:false,
      unique:true,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name:{
      type:DataTypes.STRING,
      unique:true,
      allowNull:false,
    }



  });
};
