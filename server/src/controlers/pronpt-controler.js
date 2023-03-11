//O controler tem a função de controlar o request e o response
// Quem acessar a aplicação ira acessar ela apartir do controlador
const { OpenAIApi } = require("openai") // 
const openai = require("../config/openai") // importa as configurações imbutidas
const InputModel = require("../model/input-model") // importa  o modelo de entrada(Objeto com propriedade prompt)
module.exports  = { // controla tudo que está exportando e trabalhando

    async sendText(request, response){ 

        const openaiAI = openai.configuration() //Utiliza as configurações inportadas acima
        const inputModel = new InputModel(request.body)

        try { //Tenta fazer algo senão fizer entra na camada de erro(catch)
            
            const result  = await openaiAI.createCompletion(
                openai.textCompletion(inputModel)
            )
                
            return response.status(200).json(
                {
                    sucess: true,
                    data: result.data.choices[0].text // resposta do caht
                }
            )

        } catch (error) {
            
            return response.status(400).json({

                    sucess: false,
                    error: error.response ?
                    error.response.data : "Erro no servidor!"

                })

        }
            

    }

} 