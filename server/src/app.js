const express = require("express") // Importa as bibliotecas express 
const cors = require("cors") // Importa as bibliotecas cors
const routes = require("./routes/routes") // Importa as rotas

require("dotenv").config() // Deixa caregado na memoria o molho de chaves(keyring)

const app = express() //Declara que essa é uma aplicação express

app.use(express.json()) //Fala que a aplicação ira trabalhar com formato de json
app.use(cors()) // Fala que ira utilizar o cors
app.use(routes)// Fala que a aplicação estara usando essas rotas

module.exports = app // Exporta o app