const ThalesManager = require("./ThalesManager")
const DynamoDB = require('/opt/nodejs/libs/DynamoDB');
const moment = require('/opt/nodejs/node_modules/moment-timezone');
const uuid = require("/opt/nodejs/node_modules/uuid/v4");
const SQLManager = require("./SQLManager");

const getTopAirportSTAR = async (event) => {
    const {
        top,
        airportIcaos
    } = event.arguments;

    let query = `SELECT airportUID, sw.waypointUID, COUNT(sw.waypointUID) as counted FROM STARWaypoint sw 
                INNER JOIN STAR ON STARName = STAR.name 
                INNER JOIN Airport ON STAR.airportUID = Airport.UID 
                ${airportIcaos && airportIcaos.length > 0 ? `WHERE Airport.UID IN ('${airportIcaos.join("', '")}')` : ''} 
                GROUP BY Airport.UID, sw.waypointUID 
                ORDER BY COUNT(sw.waypointUID) DESC ${top && top > 0 ? `LIMIT ${top}` : ''} `;

    console.log(query);
    let result = await SQLManager.query(query);
    result = Object.values(JSON.parse(JSON.stringify(result)))
    console.log(result);

    return result
    
}

module.exports = getTopAirportSTAR;