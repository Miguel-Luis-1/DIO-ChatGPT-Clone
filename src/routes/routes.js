const express = require("express") // importa
const promptControler = require("../controlers/pronpt-controler") // importa o controlador e asosia ele a uma rota

const routes = express.Router() // Utiliza as rotas do express

routes.post('/api/prompt', promptControler.sendText) // Determina o caminho das rotas, caminho para chegar no controlador
module.exports = routes // exporta o routes

 
// http://localhost:5001/api/prompt