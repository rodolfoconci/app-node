var express = require('express');
const Sequelize = require('sequelize');
const db = require ('../config/db');

//Defino la tabla de medicos
const tablaUsuarios = db.define('usuarios',{
    idUsuario:{
      type: Sequelize.UUID,
      primaryKey:true,
      autoIncrement:true,
      allowNull: false
    },
    nombre: {
        type: Sequelize.STRING
    },
    apellido: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    roleIdRol: {
        type: Sequelize.UUID,
        allowNull: false
        }
  })

  module.exports = tablaUsuarios;