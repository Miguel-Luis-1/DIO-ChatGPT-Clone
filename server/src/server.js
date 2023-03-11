const app = require("./app") // Importa o app para servir ele
const port = process.env.PORT // 5001   // Declara uma porta e busca ela no aquivo .env

app.listen(port, ()=>{
    console.log(`Server listing on port ${port}`) // Amostra a porta com que o server está se comunicando
})