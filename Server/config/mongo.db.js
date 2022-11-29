const Mongoose = require('mongoose');
const debug = require("debug")("app:mongoose");

const dbhost = process.env.DBHOST || "0.0.0.0";
const dbport = process.env.DBPORT || "27017";
const dbname = process.env.DBNAME || "local"

const dburi = process.env.DBURI || `mongodb://${dbhost}:${dbport}/${dbname}`;

const connect = async () => {
  debug(dburi);
  try {
    await Mongoose.connect(dburi);
    debug("Conexión a la base exitosa");
  } catch (error) {
    debug("Error en la conexión de la base");
    process.exit(1);
  }
}

module.exports = {
  connect
}