const request = require('request');

const BASE_URL = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
const API_KEY = 'AIzaSyBmGT-VVkUs_miI8LUwWOPNLpvNOW0x1z0';


const consultAddress = (address, callback) => {
    const _EXTERNAL_URL = BASE_URL + address + '&key=' + API_KEY;
    request(_EXTERNAL_URL, { json: true }, (err, _res, body) => {
    if (err) { 
        return callback(err);
     }
    return callback(body);
    });
}

const calculoDistancia = (x1, y1, x2, y2) => {
    const resultado = Math.sqrt( ((x1-x2)**2) - ((y1-y2)**2) )
    return resultado;
}


module.exports = {
    consultAddress,
    calculoDistancia,
}