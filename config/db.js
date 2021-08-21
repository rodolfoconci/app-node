//Conexion MySQL
const Sequelize = require('sequelize')

//conexion local -> wamp
//let database = 'mydb'
//let userMYSQL = 'root'
//let passMySQL = ''
//let hostMySQL = '127.0.0.1'

let database = 'heroku_2d0c9e5eed5c699'
let userMYSQL = 'bcc79fe236739d'
let passMySQL = 'ced85fa6'
let hostMySQL = 'us-cdbr-east-04.cleardb.com'

const db = new Sequelize(database, userMYSQL, passMySQL, {
  host: hostMySQL,
  dialect: 'mysql',
  define: {
        //desactivamos el timestamp, para que no envie fechas de actualizaciones a la db
        //https://sequelize.org/v5/manual/models-definition.html
        //https://sequelize.org/v5/manual/models-definition.html#configuration
        timestamps: false,
    }
})

module.exports = db;