const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

// 📍 MODELO 1 | Pokemons
// 
// ID. *
// Nombre. *
// Imagen. *
// Vida. *
// Ataque. *
// Defensa. *
// Velocidad.
// Altura.
// Peso.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id:{
      type:DataTypes.UUID,
      allowNull:false,
      unique:true,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      unique:true,
      allowNull: false,
    },
    vida: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    ataque: {
      type:DataTypes.INTEGER,
      allowNull:true,
      defaultValue:0
    },
    defensa:{
      type:DataTypes.INTEGER,
      allowNull:true,
      defaultValue:0

    },
    velocidad: {
      type:DataTypes.INTEGER,
      allowNull:true,
     
    },
    altura: {
      type:DataTypes.INTEGER,
      allowNull:true,
      defaultValue:0
    },
    peso: {
      type:DataTypes.INTEGER,
      allowNull:true,
      defaultValue:0
    },
    img:{
      type:DataTypes.STRING,
      
    },
    type: {
      type:DataTypes.STRING,

    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
   
  });
};
