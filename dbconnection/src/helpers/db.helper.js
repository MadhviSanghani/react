//for config
const { MYSQL_DB_CONFIG } = require("../config/db.config");

//for mysql connection
const mysql = require("mysql2/promise");

//for Sequelize ORM
const { Sequelize } = require("sequelize");

module.exports = db = {};   // db is empty object

initialize();     // function call , use finction keyword to use function before create it

async function initialize() {
  const { HOST, USER, PORT, PASSWORD, DB } = MYSQL_DB_CONFIG;

  const connection = await mysql.createConnection({    // function of that promise
    host: HOST,
    user: USER,
    password: PASSWORD,     //if having differet port number mention it here too
  });

  // if database id already made no need to do this
  await connection.query(`Create database if not exists \`${DB}\`;`);  //$ - string interpolation - at the rutime it will put value of that variable
// connect with server ^

  //connect to db
  const sequelize = new Sequelize(DB, USER, PASSWORD, {      
    dialect: "mysql",   // by which want to convert query in your database type
    host: HOST,       //if having differet port number mention it here too
  });

 db.Category = require("../models/category.model")(sequelize);
 db.Product = require("../models/product.model")(sequelize);


 
  await sequelize.sync({ alter: true });  //modify changes of table
}
