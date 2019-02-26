const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");
const app = express();
const orm = require("./config/orm.js");

console.log(orm.all());

// This sets the port of the application;
// process.env.PORT lets the port be set by Heroku:
var PORT = process.env.PORT || 8080;

// Parse request body as JSON:
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");