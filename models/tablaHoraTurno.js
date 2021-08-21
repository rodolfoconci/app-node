var express = require('express');
const Sequelize = require('sequelize');
const db = require ('../config/db');

//defino la tabla especialidades
const tablaHoraTurno = db.define('horaTurno',{
    idhoraTurno:{
        type: Sequelize.UUID,
        primaryKey: true,autoIncrement:true,
        allowNull: false
    },
    horaTurno:{
        type: Sequelize.STRING
    }
})

module.exports = tablaHoraTurno;