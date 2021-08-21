var express = require('express');
const Sequelize = require('sequelize');
var router = express.Router();
//importo la conexion a la base de datos
const db = require ('../config/db');
const tablaMedicos = require('../models/tablaMedicos');
const tablaEspecialidades = require('../models/tablaEspecialidades');
const tablaUsuarios = require('../models/tablaUsuarios');
const tablaRoles = require('../models/tablaRoles');
const tablaHoraTurno = require('../models/tablaHoraTurno');
const tablaTurnos = require('../models/tablaTurnos');
require('../models/relaciones');

router.get('/', async (req,res) => {
    const turnos = await tablaTurnos.findAll({
        include:[{
            model: tablaUsuarios,
            required:true 
        },
        {
            model: tablaMedicos,
            required:true ,
            include:[{
                model: tablaEspecialidades,
                required:true 
            }]
        },
        {
            model: tablaHoraTurno,
            required:true
        }
    ],
        order:[
            ['fechaTurno']
          ]
    
    })
    res.render('turnos', { title: 'Turnos', turnos:turnos});
  });


module.exports = router;