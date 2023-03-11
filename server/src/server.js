const app = require("./app") // importa o app para servir ele
const port = process.env.PORT // Declara uma porta 

app.listen(port, ()=>{
    console.log(`Server listing on port ${port}`) // amostra a porta com que o server está se comunicando
})