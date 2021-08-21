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
    let title = "Agregar personal";
    const selectorEspecialidad = await tablaEspecialidades.findAll({   
    });
    res.render('nuevoMedico',{selectorEsp:selectorEspecialidad, title});
    })

router.post('/', async (req,res) => {
    const nuevoMedico = {
        idMedico:0,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        especialidadeIdEspecialidad: req.body.especialidad1,
        imagen: "default.jpg",
        genero: req.body.genero
        }
        try {
            const cargarMedico = await tablaMedicos.create({
                idMedico:nuevoMedico.idMedico,
                nombre: nuevoMedico.nombre,
                apellido: nuevoMedico.apellido,
                especialidadeIdEspecialidad: nuevoMedico.especialidadeIdEspecialidad,
                imagen: nuevoMedico.imagen,
                genero: nuevoMedico.genero
            })    
            
            let title = "Agregar personal";
            
            const selectorEspecialidad1 = await tablaEspecialidades.findAll({   
            });
            res.render("nuevoMedico",{alta:true,selectorEsp:selectorEspecialidad1})
        } catch (error) {
            console.log("Error en el alta "+error)
            res.render("nuevoMedico",{alta:false,error})
        }
    })




module.exports = router;


