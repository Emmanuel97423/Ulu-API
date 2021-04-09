const express = require("express");

const app = express();
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

app.use("/api/dibs", dibsRoute);

module.exports = app;
