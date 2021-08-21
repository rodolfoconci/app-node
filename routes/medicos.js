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

//LLeva al personalmedico
router.get('/', async (req,res) => {
let title = "Personal Medico";
const personalMedico = await tablaMedicos.findAll({   
    include: {
        model: tablaEspecialidades,
        required: true
    }
});
res.render('personalMedico',{medicos:personalMedico, title});
})

//LLeva al id del medico que haces click para solicitar turno
router.get('/:id',async (req,res) => {
    let paramURL = req.params.id;
    let title = "Solicitar Turno";
    const solicitarTurno = await tablaMedicos.findOne({
        where:{idMedico:paramURL},
        include: {
            model: tablaEspecialidades,
            required: true
        }
    });
    const selectorHora = await tablaHoraTurno.findAll({
    });
    res.render('solicitar',{solicitarTurno:solicitarTurno, title:solicitarTurno.nombre+" "+solicitarTurno.apellido, selectorHora:selectorHora})   
})

//Carga en base de datos un turno en la tabla y le vuelvo a pasar las variables para el formulario
router.post('/:id', async (req,res) => {
    const nuevoTurno = {
        idTurno:0,
        fechaTurno: req.body.fecha,
        horaturnoIdhoraTurno: req.body.horaturno,
        medicoIdMedico: req.body.idMedico,
        usuarioIdUsuario: 1
    }
    try {
        const cargarTurno = await tablaTurnos.create({
            idTurno: nuevoTurno.idTurno,
            fechaTurno: nuevoTurno.fechaTurno,
            horaturnoIdhoraTurno: nuevoTurno.horaturnoIdhoraTurno,
            medicoIdMedico: nuevoTurno.medicoIdMedico,
            usuarioIdUsuario: nuevoTurno.usuarioIdUsuario
        })    
        let paramURL = req.params.id;
        let title = "Solicitar Turno";
        const solicitarTurno1 = await tablaMedicos.findOne({
            where:{idMedico:paramURL},
            include: {
                model: tablaEspecialidades,
                required: true
            }
        });
        const selectorHora1 = await tablaHoraTurno.findAll({
        });
        res.render("solicitar",{alta:true,selectorHora:selectorHora1,solicitarTurno:solicitarTurno1})
    } catch (error) {
        console.log("Error en el alta "+error)
        res.render("solicitar",{alta:false,error})
    }
})

module.exports = router;


