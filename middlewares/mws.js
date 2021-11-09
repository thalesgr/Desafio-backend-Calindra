const model = require('../models/model');
const service = require('../services/service');

const createAds = async (req, _res, next) => {
    const { results } = req.body;

    await results.forEach( async (element) => {
      service.consultAddress(element,async function(response) {
           const geocode = response.results[0].geometry.location;
           const dados = {
               endereço: element,
               geoLocation: geocode,
            }
            await model.create(dados);
        });
   });
   next();
}

module.exports = { 
    createAds,
}