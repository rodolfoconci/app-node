var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//importo hbs
var hbs = require('hbs');

//Listado de rutas
//Estas vienen por default
var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
//Agredas por mi
var contactoRouter = require('./routes/contacto');
var medicosRouter = require('./routes/medicos');
var altaRouter = require('./routes/alta');
var turnosRouter = require('./routes/turnos');


var app = express();

//Registro de partials
hbs.registerPartials(__dirname + '/partials');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Ejecucion de rutas
//Estas vienen por default
app.use('/', indexRouter);
//app.use('/users', usersRouter);
//Agregadas por mi
app.use('/contacto', contactoRouter);
app.use('/medicos', medicosRouter);
app.use('/alta', altaRouter);
app.use('/turnos', turnosRouter)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


//variables globales
app.locals.anio = new Date().getFullYear();

module.exports = app;
