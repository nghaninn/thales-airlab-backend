// const AWS = require("aws-sdk");
const axios = require("/opt/nodejs/node_modules/axios");
// const SSMManager = require("./SSMManager");
const SSMManager = require("/opt/nodejs/libs/SSMManager");

const url = 'https://open-atms.airlab.aero/api/v1';

// Get apiKey
let apiKey;

const loadAPIKey = async () => {
    // console.log('loadingAPIKey');
    apiKey = (await SSMManager.getSecrets(process.env['apiKey'])).Value ?? null;
    // console.log(apiKey);

    if (!apiKey) {
        throw Error("Invalid apiKey")
    }
}


module.exports = {
    getAllAirport: async () => {
        console.log('getAllAirport')
        if (!apiKey) {
            await loadAPIKey();
        }

        var config = {
            method: 'get',
            url: `${url}/airac/airports`,
            headers: {
                'api-key': apiKey
            }
        };

        let response = await axios(config)
        console.log(JSON.stringify(response.data));

        return response.data;
    },
    getAllWaypoint: async () => {
        console.log('getAllWaypoint');
        if (!apiKey) {
            await loadAPIKey();
        }

        var config = {
            method: 'get',
            url: `${url}/airac/waypoints`,
            headers: {
                'api-key': apiKey
            }
        };

        let response = await axios(config)
        console.log(JSON.stringify(response.data));

        return response.data;
    },
    getAllSID: async (icao) => {
        console.log('getAllSID');
        if (!apiKey) {
            await loadAPIKey();
        }

        var config = {
            method: 'get',
            url: `${url}/airac/sids/airport/${icao}`,
            headers: {
                'api-key': apiKey
            }
        };

        let response = await axios(config)
        console.log(JSON.stringify(response.data));

        return response.data;
    },
    getAllSTAR: async (icao) => {
        console.log('getAllSTAR');
        if (!apiKey) {
            await loadAPIKey();
        }

        var config = {
            method: 'get',
            url: `${url}/airac/stars/airport/${icao}`,
            headers: {
                'api-key': apiKey
            }
        };

        let response = await axios(config)
        console.log(JSON.stringify(response.data));

        return response.data;
    }
};
