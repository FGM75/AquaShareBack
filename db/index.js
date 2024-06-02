require("dotenv").config();
const debug = require("debug")("api-aquatravel:db:conexion");
const chalk = require("chalk");
const mongoose = require("mongoose");

const conectaMongo = async (callback) => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    debug(chalk.magentaBright("Base de datos iniciada"));
    callback();
  } catch (err) {
    debug(chalk.red.bold("No se ha podido iniciar la base de datos"));
    debug(chalk.red.bold(err.message));
  }
};

module.exports = conectaMongo;
