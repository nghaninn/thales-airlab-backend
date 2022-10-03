const ThalesManager = require("./ThalesManager")
const DynamoDB = require('/opt/nodejs/libs/DynamoDB');
const moment = require('/opt/nodejs/node_modules/moment-timezone');
const uuid = require("/opt/nodejs/node_modules/uuid/v4");
const SQLManager = require("./SQLManager");

const getTopAirportSID = async (event) => {
    const {
        top,
        airportIcaos
    } = event.arguments;


    let query = `SELECT airportUID, waypointUID, counted, a.lat as airportLat, a.lng AS airportLng, w.lat AS waypointLat, w.lng AS waypointLng FROM
    (SELECT airportUID, sidW.waypointUID, COUNT(sidW.waypointUID) as counted FROM SIDWaypoint sidW 
                INNER JOIN SID ON SIDName = SID.NAME 
                INNER JOIN Airport ON SID.AirportUID = Airport.UID 
                ${airportIcaos && airportIcaos.length > 0 ? `WHERE Airport.UID IN ('${airportIcaos.join("', '")}')` : ''} 
                GROUP BY Airport.UID, sidW.waypointUID 
                ORDER BY COUNT(sidW.waypointUID) DESC ${top && top > 0 ? `LIMIT ${top}` : ''} 
                ) as t
                INNER JOIN Airport a ON a.uid = airportUID
                INNER JOIN Waypoint w ON w.uid = waypointUID`;

    let result = await SQLManager.query(query);
    result = Object.values(JSON.parse(JSON.stringify(result)))
    console.log(result);

    return result
}

module.exports = getTopAirportSID;