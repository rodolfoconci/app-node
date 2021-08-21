var express = require('express');
const Sequelize = require('sequelize');
const db = require ('../config/db');

//Defino la tabla de medicos
const tablaMedicos = db.define('medicos',{
    idMedico:{
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
    especialidadeIdEspecialidad: {
        type: Sequelize.UUID,
        allowNull: false
        } ,
    imagen: {
        type: Sequelize.STRING},
    genero: {
        type: Sequelize.INTEGER}
  })

  module.exports = tablaMedicos;