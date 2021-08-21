//Importo express y ejecucion del "sistema de rutas" de express
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {

  //render('vista a renderizar', {data a enviar a la vista})
  res.render('contacto',{title: "Contacto", data:"Hola mundo!"});

});
router.post('/', function(req, res) {

  //render('vista a renderizar', {data a enviar a la vista})
  console.log(req.body.marca)
  res.render('contacto',{title: "Hola " + req.body.marca, data:"Hola mundo!"});

});
module.exports = router;


//tomar variables de un modal
// req.body.variable