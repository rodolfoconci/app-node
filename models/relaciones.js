
const tablaMedicos = require('../models/tablaMedicos');
const tablaEspecialidades = require('../models/tablaEspecialidades');
const tablaUsuarios = require('../models/tablaUsuarios');
const tablaRoles = require('../models/tablaRoles');
const tablaTurnos = require('../models/tablaTurnos');
const tablaHoraTurno = require('../models/tablaHoraTurno');

tablaMedicos.belongsTo(tablaEspecialidades);
tablaEspecialidades.hasOne(tablaMedicos);
tablaUsuarios.belongsTo(tablaRoles);
tablaRoles.hasOne(tablaUsuarios);
tablaTurnos.belongsTo(tablaHoraTurno);
tablaHoraTurno.hasOne(tablaTurnos);
tablaTurnos.belongsTo(tablaMedicos);
tablaMedicos.hasOne(tablaTurnos);
tablaTurnos.belongsTo(tablaUsuarios);
tablaUsuarios.hasOne(tablaTurnos);
