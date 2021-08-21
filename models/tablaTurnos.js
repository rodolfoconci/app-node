var express = require('express');
const Sequelize = require('sequelize');
const db = require ('../config/db');

//defino la tabla especialidades
const tablaTurnos = db.define('turnos',{
    idTurno:{
        type: Sequelize.UUID,
        primaryKey: true,autoIncrement:true,
        allowNull: false
    },
    fechaTurno:{
        type: Sequelize.DATE
    },
    horaturnoIdhoraTurno:{
        type: Sequelize.UUID,
        allowNull: false
        },
    medicoIdMedico:{
        type: Sequelize.UUID,
        allowNull: false
        },
    usuarioIdUsuario:{
            type: Sequelize.UUID,
            allowNull: false
            }
    })
module.exports = tablaTurnos;