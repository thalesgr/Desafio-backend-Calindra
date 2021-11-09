const express = require('express');
const bodyParser = require('body-parser');

const model = require('./models/model');
const service = require('./services/service');
const { createAds } = require('./middlewares/mws');

const app =  express();

const PORT = 3003;


app.use(bodyParser.json());

app.post('/', createAds, async (_req, res) => {
    res.send('Endereços cadastrados. Para receber o resultado fazer uma requisção do tipo GET')
})

app.get('/',  async(_req, res) => {
    const cadastros = await model.getAll();
    const dadosFinais = []
    for(let x = 0; x < cadastros.length; x++) {
        for(let y = x+1 ; y < cadastros.length; y++) {
            const x1 = cadastros[x].geoLocation.lat;
            const y1 = cadastros[x].geoLocation.lng;
            const x2 = cadastros[y].geoLocation.lat;
            const y2 = cadastros[y].geoLocation.lng;
            const resultado = service.calculoDistancia(x1,y1,x2,y2);
            const dado = {
                endereço1: cadastros[x].endereço,
                endereço2: cadastros[y].endereço,
                distancia: resultado,
            }
            dadosFinais.push(dado);
        }
    }
    
    res.send(dadosFinais);

})


app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});
