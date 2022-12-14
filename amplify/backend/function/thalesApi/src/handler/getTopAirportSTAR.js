const SQLManager = require("/opt/nodejs/libs/SQLManager");

const getTopAirportSTAR = async (event) => {
    const {
        top,
        airportIcaos
    } = event.arguments;

    let query = `SELECT airportUID, waypointUID, counted, a.lat as airportLat, a.lng AS airportLng, w.lat AS waypointLat, w.lng AS waypointLng FROM
    (SELECT airportUID, sw.waypointUID, COUNT(sw.waypointUID) as counted FROM STARWaypoint sw 
                INNER JOIN STAR ON STARName = STAR.name 
                INNER JOIN Airport ON STAR.airportUID = Airport.UID 
                ${airportIcaos && airportIcaos.length > 0 ? `WHERE Airport.UID IN ('${airportIcaos.join("', '")}')` : ''} 
                GROUP BY Airport.UID, sw.waypointUID 
                ORDER BY COUNT(sw.waypointUID) DESC ${top && top > 0 ? `LIMIT ${top}` : ''} 
                ) as t
                INNER JOIN Airport a ON a.uid = airportUID
                INNER JOIN Waypoint w ON w.uid = waypointUID `;

    console.log(query);
    let result = await SQLManager.query(query);
    result = Object.values(JSON.parse(JSON.stringify(result)))
    console.log(result);

    return result
    
}

module.exports = getTopAirportSTAR;