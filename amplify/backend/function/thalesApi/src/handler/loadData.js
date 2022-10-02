// const UserManager = require("/opt/nodejs/libs/UserManager");
const ThalesManager = require("./ThalesManager")
const DynamoDB = require('/opt/nodejs/libs/DynamoDB');
const moment = require('/opt/nodejs/node_modules/moment-timezone');
const uuid = require("/opt/nodejs/node_modules/uuid/v4");

const loadData = async (event) => {

    // Download All WP
    let waypoints = []
    // waypoints = await ThalesManager.getAllWaypoint();

    for (let w of waypoints) {
        let batchItems = [];

        batchItems.push({
            uid: w.uid,
            "name": w.name,
            "lat": w.lat,
            "lng": w.lng,
            "createdAt": moment().toISOString(),
            "updatedAt": moment().toISOString(),
        });

        let batchItems_block = [];
        const batchItems_blockChunk = 25;
        for (let begin = 0; begin < batchItems.length; begin += batchItems_blockChunk) {
            let temparray = batchItems.slice(begin, begin + batchItems_blockChunk);
            batchItems_block.push(temparray);
        }
        console.log(batchItems_block.length, JSON.stringify(batchItems_block, null, 2));

        for (let _batchItems of batchItems_block) {
            await DynamoDB.batchWrite(`Waypoint`, _batchItems);
        }

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

    // Download All Airport
    let airports = []
    airports = await ThalesManager.getAllAirport();
    console.log(airports);

    for (let a of airports) {
        let updateParams = {
            Key: {
                uid: `${a.uid}`
                // token: { S: JSON.stringify(qbToken) },
                // expiresIn: { N: qbToken.x_refresh_token_expires_in },
                // date: { S: moment().toISOString() },
            },
            UpdateExpression: "set #variable1 = :val1, #variable2 = :val2, #variable3 = :val3, #variable4 = :val4, #variable5 = :val5, #variable6 = :val6, #variable7 = :val6",
            // ConditionExpression: "id = :key1",
            ExpressionAttributeNames: {
                "#variable1": "name",
                "#variable2": "icao",
                "#variable3": "lat",
                "#variable4": "lng",
                "#variable5": "alt",
                "#variable6": "createdAt",
                "#variable7": "updatedAt",
            },
            ExpressionAttributeValues: {
                ":val1": a.name,
                ":val2": a.icao,
                ":val3": a.lat,
                ":val4": a.lng,
                ":val5": a.alt,
                ":val6": moment().toISOString(),
            },
            ReturnValues: "ALL_NEW"
        };

        // let airportResult = await DynamoDB.update(`Airport`, updateParams)
        // console.log(airportResult);


        // Get All SID
        let SIDs = [];
        SIDs = await ThalesManager.getAllSID(a.icao);

        for (let s of SIDs) {
            let batchItems = [];

            batchItems.push({
                "name": s.name,
                "airportUID": s.airport.uid,
                "createdAt": moment().toISOString(),
                "updatedAt": moment().toISOString(),
            });

            let batchItems_block = [];
            const batchItems_blockChunk = 25;
            for (let begin = 0; begin < batchItems.length; begin += batchItems_blockChunk) {
                let temparray = batchItems.slice(begin, begin + batchItems_blockChunk);
                batchItems_block.push(temparray);
            }
            console.log(batchItems_block.length, JSON.stringify(batchItems_block, null, 2));

            for (let _batchItems of batchItems_block) {
                await DynamoDB.batchWrite(`SID`, _batchItems);
            }

            let batchItems2 = [];
            for (let sw of s.waypoints) {

                batchItems2.push({
                    "id": uuid(),
                    "sIDID": s.name,
                    "waypointID": sw.uid,
                    "createdAt": moment().toISOString(),
                    "updatedAt": moment().toISOString(),
                });

                let batchItems_block = [];
                const batchItems_blockChunk = 25;
                for (let begin = 0; begin < batchItems2.length; begin += batchItems_blockChunk) {
                    let temparray = batchItems2.slice(begin, begin + batchItems_blockChunk);
                    batchItems_block.push(temparray);
                }
                console.log(batchItems_block.length, JSON.stringify(batchItems_block, null, 2));

                for (let _batchItems of batchItems_block) {
                    await DynamoDB.batchWrite(`SIDWaypoint`, _batchItems);
                }
            }
        }


        // Get All STAR
        let STARs = [];
        STARs = await ThalesManager.getAllSID(a.icao);

        for (let s of STARs) {
            let batchItems = [];

            batchItems.push({
                "name": s.name,
                "airportUID": s.airport.uid,
                "createdAt": moment().toISOString(),
                "updatedAt": moment().toISOString(),
            });

            let batchItems_block = [];
            const batchItems_blockChunk = 25;
            for (let begin = 0; begin < batchItems.length; begin += batchItems_blockChunk) {
                let temparray = batchItems.slice(begin, begin + batchItems_blockChunk);
                batchItems_block.push(temparray);
            }
            console.log(batchItems_block.length, JSON.stringify(batchItems_block, null, 2));

            for (let _batchItems of batchItems_block) {
                await DynamoDB.batchWrite(`STAR`, _batchItems);
            }

            let batchItems2 = [];
            for (let sw of s.waypoints) {

                batchItems2.push({
                    "id": uuid(),
                    "sIDID": s.name,
                    "waypointID": sw.uid,
                    "createdAt": moment().toISOString(),
                    "updatedAt": moment().toISOString(),
                });

                let batchItems_block = [];
                const batchItems_blockChunk = 25;
                for (let begin = 0; begin < batchItems2.length; begin += batchItems_blockChunk) {
                    let temparray = batchItems2.slice(begin, begin + batchItems_blockChunk);
                    batchItems_block.push(temparray);
                }
                console.log(batchItems_block.length, JSON.stringify(batchItems_block, null, 2));

                for (let _batchItems of batchItems_block) {
                    await DynamoDB.batchWrite(`STARWaypoint`, _batchItems);
                }
            }
        }
    }

    return {
        success: true,
    };
};

module.exports = loadData;
