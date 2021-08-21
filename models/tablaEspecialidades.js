var express = require('express');
const Sequelize = require('sequelize');
const db = require ('../config/db');

//defino la tabla especialidades
const tablaEspecialidades = db.define('especialidades',{
    idEspecialidad:{
        type: Sequelize.UUID,
        primaryKey: true,autoIncrement:true,
        allowNull: false
    },
    especialidad:{
        type: Sequelize.STRING
    }
})

module.exports = tablaEspecialidades;