// const UserManager = require("/opt/nodejs/libs/UserManager");
const ThalesManager = require("./ThalesManager")
const DynamoDB = require('/opt/nodejs/libs/DynamoDB');
const moment = require('/opt/nodejs/node_modules/moment-timezone');
const uuid = require("/opt/nodejs/node_modules/uuid/v4");
const SQLManager = require("./SQLManager");

const loadData = async (event) => {

    // Delete all data
    const deleteResult = await SQLManager.query(`DELETE FROM STARWaypoint WHERE STARName <> "";
    DELETE FROM SIDWaypoint WHERE SIDName <> "";
    DELETE FROM STAR WHERE name <> "";
    DELETE FROM SID WHERE name <> "";
    DELETE FROM Waypoint WHERE uid <> "";
    DELETE FROM Airport WHERE uid <> "";`);
    console.log(deleteResult);

    // Download All WP
    let waypoints = []
    waypoints = await ThalesManager.getAllWaypoint();

    let queries = [];
    let batchItems = [];

    // combine all wp into 1 object
    for (let w of waypoints) {
        queries.push(`INSERT INTO Waypoint (\`uid\`, \`name\`, \`lat\`, \`lng\`) VALUES('${w.uid}', '${w.name}', ${w.lat}, ${w.lng}) ON DUPLICATE KEY UPDATE \`name\`=VALUES(name), \`lat\`=VALUES(lat), \`lng\`=VALUES(lng); `)

        batchItems.push({
            uid: w.uid,
            "name": w.name,
            "lat": w.lat,
            "lng": w.lng,
            "createdAt": moment().toISOString(),
            "updatedAt": moment().toISOString(),
        });
        // let updateParams = {
        //     Key: {
        //         uid: `${w.uid}`
        //         // token: { S: JSON.stringify(qbToken) },
        //         // expiresIn: { N: qbToken.x_refresh_token_expires_in },
        //         // date: { S: moment().toISOString() },
        //     },
        //     UpdateExpression: "set #variable1 = :val1, #variable2 = :val2, #variable3 = :val3, #variable6 = :val6, #variable7 = :val6",
        //     // ConditionExpression: "id = :key1",
        //     ExpressionAttributeNames: {
        //         "#variable1": "name",
        //         "#variable2": "lat",
        //         "#variable3": "lng",
        //         "#variable6": "createdAt",
        //         "#variable7": "updatedAt",
        //     },
        //     ExpressionAttributeValues: {
        //         ":val1": w.name,
        //         ":val2": w.lat,
        //         ":val3": w.lng,
        //         ":val6": moment().toISOString(),
        //     },
        //     ReturnValues: "ALL_NEW"
        // };

        // let waypointResult = await DynamoDB.update(`Waypoint`, updateParams)
        // console.log(waypointResult);
    }

    // split into block of 25
    let batchItems_block = [];
    const batchItems_blockChunk = 25;
    for (let begin = 0; begin < batchItems.length; begin += batchItems_blockChunk) {
        let temparray = batchItems.slice(begin, begin + batchItems_blockChunk);
        batchItems_block.push(temparray);
    }
    // console.log(batchItems_block.length, JSON.stringify(batchItems_block, null, 2));
    // for (let _batchItems of batchItems_block) {
    //     await DynamoDB.batchWrite(`Waypoint`, _batchItems);
    // }

    // Insert SQL WP
    const result = await SQLManager.query(queries.join(''));
    console.log(result);


    // Download All Airport
    let airports = []
    airports = await ThalesManager.getAllAirport();
    // console.log(airports);

    // Save all Airport into DB
    let _airports = []
    for (let a of airports) {
        _airports.push({
            uid: a.uid,
            name: a.name,
            icao: a.icao,
            lat: a.lat,
            lng: a.lng,
            alt: a.alt ?? 0,
        })
    }

    let airportQuery = _airports.map(s => `INSERT INTO Airport (${Object.keys(s).join(', ')}) VALUES ('${Object.keys(s).map(x => s[x]).join('\', \'')}') ON DUPLICATE KEY UPDATE ${Object.keys(s).map(x => `\`${x}\` = VALUES(${x})`).join(', ')}; `).join('');
    const airportResult = await SQLManager.query(airportQuery);
    console.log(airportResult);


    let _sid = []
    let _star = []
    let _sidWaypoint = []
    let _starWaypoint = [];
    for (let a of airports) {

        // let updateParams = {
        //     Key: {
        //         uid: `${a.uid}`
        //     },
        //     UpdateExpression: "set #variable1 = :val1, #variable2 = :val2, #variable3 = :val3, #variable4 = :val4, #variable5 = :val5, #variable6 = :val6, #variable7 = :val6",
        //     ExpressionAttributeNames: {
        //         "#variable1": "name",
        //         "#variable2": "icao",
        //         "#variable3": "lat",
        //         "#variable4": "lng",
        //         "#variable5": "alt",
        //         "#variable6": "createdAt",
        //         "#variable7": "updatedAt",
        //     },
        //     ExpressionAttributeValues: {
        //         ":val1": a.name,
        //         ":val2": a.icao,
        //         ":val3": a.lat,
        //         ":val4": a.lng,
        //         ":val5": a.alt,
        //         ":val6": moment().toISOString(),
        //     },
        //     ReturnValues: "ALL_NEW"
        // };

        // let airportResult = await DynamoDB.update(`Airport`, updateParams)
        // console.log(airportResult);


        // Get All SID
        let SIDs = [];
        SIDs = await ThalesManager.getAllSID(a.icao);

        let sidBatchItems = [];
        let sidWPBatchItems2 = [];
        for (let s of SIDs) {
            _sid.push({
                "name": s.name,
                "airportUID": s.airport.uid,
            })
            sidBatchItems.push({
                "name": s.name,
                "airportUID": s.airport.uid,
                "createdAt": moment().toISOString(),
                "updatedAt": moment().toISOString(),
            });

            for (let sw of s.waypoints) {
                _sidWaypoint.push({
                    SIDName: s.name,
                    waypointUID: sw.uid,
                })
                sidWPBatchItems2.push({
                    "id": uuid(),
                    "sIDID": s.name,
                    "waypointID": sw.uid,
                    "createdAt": moment().toISOString(),
                    "updatedAt": moment().toISOString(),
                });
            }
        }

        let sidBatchItems_block = [];
        const batchItems_blockChunk = 25;
        for (let begin = 0; begin < sidBatchItems.length; begin += batchItems_blockChunk) {
            let temparray = sidBatchItems.slice(begin, begin + batchItems_blockChunk);
            sidBatchItems_block.push(temparray);
        }
        console.log(sidBatchItems_block.length, JSON.stringify(sidBatchItems_block, null, 2));
        // for (let _batchItems of sidBatchItems_block) {
        //     await DynamoDB.batchWrite(`SID`, _batchItems);
        // }

        let sidWPBatchItems_block = [];
        for (let begin = 0; begin < sidWPBatchItems2.length; begin += batchItems_blockChunk) {
            let temparray = sidWPBatchItems2.slice(begin, begin + batchItems_blockChunk);
            sidWPBatchItems_block.push(temparray);
        }
        console.log(sidWPBatchItems_block.length, JSON.stringify(sidWPBatchItems_block, null, 2));
        // for (let _batchItems of sidWPBatchItems_block) {
        //     await DynamoDB.batchWrite(`SIDWaypoint`, _batchItems);
        // }


        // Get All STAR
        let STARs = [];
        let starBatchItems = [];
        let starWPBatchItems2 = [];
        STARs = await ThalesManager.getAllSTAR(a.icao);

        for (let s of STARs) {
            _star.push({
                "name": s.name,
                "airportUID": s.airport.uid,
            })

            starBatchItems.push({
                "name": s.name,
                "airportUID": s.airport.uid,
                "createdAt": moment().toISOString(),
                "updatedAt": moment().toISOString(),
            });

            for (let sw of s.waypoints) {
                _starWaypoint.push({
                    STARName: s.name,
                    waypointUID: sw.uid,
                })
                starWPBatchItems2.push({
                    "id": uuid(),
                    "sIDID": s.name,
                    "waypointID": sw.uid,
                    "createdAt": moment().toISOString(),
                    "updatedAt": moment().toISOString(),
                });
            }
        }

        let starBatchItems_block = [];
        for (let begin = 0; begin < batchItems.length; begin += batchItems_blockChunk) {
            let temparray = starBatchItems.slice(begin, begin + batchItems_blockChunk);
            starBatchItems_block.push(temparray);
        }
        console.log(starBatchItems_block.length, JSON.stringify(starBatchItems_block, null, 2));
        // for (let _batchItems of starBatchItems_block) {
        //     await DynamoDB.batchWrite(`STAR`, _batchItems);
        // }

        let starWPBatchItems_block = [];
        for (let begin = 0; begin < starWPBatchItems2.length; begin += batchItems_blockChunk) {
            let temparray = starWPBatchItems2.slice(begin, begin + batchItems_blockChunk);
            starWPBatchItems_block.push(temparray);
        }
        console.log(starWPBatchItems_block.length, JSON.stringify(starWPBatchItems_block, null, 2));
        // for (let _batchItems of starWPBatchItems_block) {
        //     await DynamoDB.batchWrite(`STARWaypoint`, _batchItems);
        // }
    }

    let sidQuery = _sid.map(s => `INSERT INTO SID (${Object.keys(s).join(', ')}) VALUES ('${Object.keys(s).map(x => s[x]).join('\', \'')}') ON DUPLICATE KEY UPDATE ${Object.keys(s).map(x => `\`${x}\` = VALUES(${x})`).join(', ')}; `).join('');
    const sidResult = await SQLManager.query(sidQuery);
    console.log('sidResult', sidResult);
    let starQuery = _star.map(s => `INSERT INTO STAR (${Object.keys(s).join(', ')}) VALUES ('${Object.keys(s).map(x => s[x]).join('\', \'')}') ON DUPLICATE KEY UPDATE ${Object.keys(s).map(x => `\`${x}\` = VALUES(${x})`).join(', ')}; `).join('');
    const starResult = await SQLManager.query(starQuery);
    console.log('starResult', starResult);
    let sidWaypointQuery = _sidWaypoint.map(s => `INSERT INTO SIDWaypoint (${Object.keys(s).join(', ')}) VALUES ('${Object.keys(s).map(x => s[x]).join('\', \'')}') ON DUPLICATE KEY UPDATE ${Object.keys(s).map(x => `\`${x}\` = VALUES(${x})`).join(', ')}; `).join('');
    const sidWResult = await SQLManager.query(sidWaypointQuery);
    console.log('sidWResult', sidWResult);
    let starWaypointQuery = _starWaypoint.map(s => `INSERT INTO STARWaypoint (${Object.keys(s).join(', ')}) VALUES ('${Object.keys(s).map(x => s[x]).join('\', \'')}') ON DUPLICATE KEY UPDATE ${Object.keys(s).map(x => `\`${x}\` = VALUES(${x})`).join(', ')}; `).join('');
    const starWResult = await SQLManager.query(starWaypointQuery);
    console.log('starWResult', starWResult);

    await SQLManager.close();
    return {
        success: true,
    };
};

module.exports = loadData;
