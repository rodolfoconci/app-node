var express = require('express');
const Sequelize = require('sequelize');
const db = require ('../config/db');

//defino la tabla especialidades
const tablaRoles = db.define('roles',{
    idRol:{
        type: Sequelize.UUID,
        primaryKey: true,autoIncrement:true,
        allowNull: false
    },
    rol:{
        type: Sequelize.STRING
    }
})

module.exports = tablaRoles;