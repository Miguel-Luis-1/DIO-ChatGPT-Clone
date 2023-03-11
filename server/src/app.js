const express = require("express") // importa as bibliotecas express e cors
const cors = require("cors")
const routes = require("./routes/routes") // importa as rotas

require("dotenv").config() // declara uma nova instancia

const app = express() //Dis que é uma aplicação express

app.use(express.json()) //Fala que a aplicação ira trabalhar com formato de json
app.use(cors()) //
app.use(routes)// fala que a aplicação estara usando essas rotas

module.exports = app // exporta o app