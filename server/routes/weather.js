const router = require('express').Router();
const axios = require("axios");
require('dotenv').config();

const cities = require('../data/cities_20000.json');

router.get('/', async (req, res) => {
    let LowerCase_k = req.query.k.toLowerCase()
    res.send(Object.values(cities).filter((city) => {
        let LowerCase_city_name = (city.city_name) ? city.city_name.toLowerCase() : '';
        let LowerCase_country_full = (city.country_full) ? city.country_full.toLowerCase() : '';

        return LowerCase_city_name.includes(LowerCase_k) || LowerCase_country_full.includes(LowerCase_k)
    }));
});

router.get('/details', async (req, res) => {
    let returnObj = {};
    await axios.get(process.env.WEATHER_API_URL+'/current', {params: {key: process.env.WEATHER_API_KEY, ...req.query}})
    .then( (res) => {
        returnObj['current'] = res.data
    })
    await axios.get(process.env.WEATHER_API_URL+'/forecast/daily', {params: {key: process.env.WEATHER_API_KEY, ...req.query}})
    .then( (res) => {
        console.log(res.data)
        returnObj['forecast'] = res.data
    })

    res.send(returnObj);

});

// router.get('/:cityname', async (req, res) => {
//     // res.send(Object.values(cities).filter((city) => (city.city_name == req.params.cityname || city.country_full == req.params.cityname)));
// });

module.exports = router;