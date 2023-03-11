// Todo tipo de configuração para se comunicar com a OpenAi estara nesse arquivo
const { Configuration, OpenAIApi } = require("openai"); // Importa a as configurações e a OpenAi
require("dotenv").config() // Importa o dotenv e puvha as configurações do molho de chaves

module.exports = class openai {

    static configuration(){

        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY, // Chave da OpenAI asociada ao perfil
          });

          return new OpenAIApi(configuration) // Retorna uma nova instanci da OpenAI

    }

    static textCompletion({prompt}){
        return{
                model: "text-davinci-003", // tipo do modelo
                prompt: `${prompt}`, // entrada de dados
                temperature: 0,
                max_tokens: 3500, 
                top_p: 1,
                frequency_penalty: 0.5,
                presence_penalty: 0,
            }
        }
}

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // Chave da OpenAI asociada ao perfil
});
const openai = new OpenAIApi(configuration);

