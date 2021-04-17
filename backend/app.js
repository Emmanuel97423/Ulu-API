const express = require("express");
const mongoose = require("mongoose");
const fishRoute = require("./routes/fish.route");

const app = express();
//Variables d'environnement
require("dotenv").config();
//Connexion a la base de donnée
mongoose
  .connect(process.env.MONGO_CONNECTION_ADMIN, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch((error) => console.log("Connexion à MongoDB échouée !: " + error));
//Requête Cors
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});
//Remplace bodyParser formatage en JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes

//app.use("/api/dibs", dibsRoute);
//app.use("/api", ribsRoute);
app.use("/api", fishRoute);

module.exports = app;
