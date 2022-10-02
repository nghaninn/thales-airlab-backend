const AWS = require("aws-sdk");
const uuid = require("uuid/v4");

// AWS.config.update({ region: process.env.TABLE_REGION });

const dynamodb = new AWS.DynamoDB.DocumentClient();

let postfix_tableName = `-${process.env.API_THALES_GRAPHQLAPIIDOUTPUT}`;
if (process.env.ENV && process.env.ENV !== "NONE") {
    postfix_tableName = postfix_tableName + '-' + process.env.ENV;
}

const getTableName = (tableName) => {
    if (tableName.includes('-')) {
        return tableName;
        // throw Error(`tableName should not include '-'`);
    }

    return tableName + postfix_tableName;
}

const batchWrite = async (item) => {
    // var item = {
    //     RequestItems: {
    //         "TABLE_NAME": [
    //             {
    //                 PutRequest: {
    //                     Item: {
    //                         "KEY": { "N": "KEY_VALUE" },
    //                         "ATTRIBUTE_1": { "S": "ATTRIBUTE_1_VALUE" },
    //                         "ATTRIBUTE_2": { "N": "ATTRIBUTE_2_VALUE" }
    //                     }
    //                 }
    //             },
    //             {
    //                 PutRequest: {
    //                     Item: {
    //                         "KEY": { "N": "KEY_VALUE" },
    //                         "ATTRIBUTE_1": { "S": "ATTRIBUTE_1_VALUE" },
    //                         "ATTRIBUTE_2": { "N": "ATTRIBUTE_2_VALUE" }
    //                     }
    //                 }
    //             }
    //         ]
    //     }
    // };
    return new Promise(async (resolve, reject) => {
        dynamodb.batchWrite(item, async (err, data) => {
            if (err) {
                reject(err);
            } else
                resolve(data);
        });
    })
}

const put = async (item) => {
    // console.log(item);
    return new Promise(async (resolve, reject) => {
        dynamodb.put(item, async (err, data) => {
            if (err) {
                reject(err);
            } else
                resolve(data);
        });
    })
}

const get = async (item) => {
    // console.log(item);
    return new Promise(async (resolve, reject) => {
        dynamodb.get(item, async (err, data) => {
            if (err) {
                reject(err);
            } else
                resolve(data);
        });
    })
}

const _delete = async (item) => {
    // console.log(item);
    return new Promise(async (resolve, reject) => {
        dynamodb.delete(item, async (err, data) => {
            if (err) {
                reject(err);
            } else
                resolve(data);
        });
    })
}

module.exports = {
    delete: _delete,
    getTableName,
    put: dynamodb.put,
    get: async (tableName, getParams) => {
        let table = getTableName(tableName);
        // console.log("DynamoDB: ", table);

        // {
        //     "TableName": "Thread",
        //         "Key": {
        //         "ForumName": {
        //             "S": "Amazon DynamoDB"
        //         },
        //         "Subject": {
        //             "S": "How do I update multiple items?"
        //         }
        //     },
        //     "ProjectionExpression": "LastPostDateTime, Message, Tags",
        //         "ConsistentRead": true,
        //             "ReturnConsumedCapacity": "TOTAL"
        // }
        let getItemParams = {
            TableName: table,
            ...getParams
        }

        return get(getItemParams);
    },
    insert: async (tableName, data) => {
        let table = getTableName(tableName);
        // console.log("DynamoDB: ", table);
        let putItemParams = {
            TableName: table,
            Item: {
                ...data
            }
        }

        return put(putItemParams);
    },
    update: async (tableName, updateParams) => {
        //Key, UpdateExpression, ExpressionAttributeNames = null, ExpressionAttributeValues = null, ConditionExpression = null, ReturnValues = "NONE") => {
        let table = getTableName(tableName);

        // {
        //     "TableName": "Thread",
        //     "Key": {
        //         "ForumName": {
        //             "S": "Amazon DynamoDB"
        //         },
        //         "Subject": {
        //             "S": "Maximum number of items?"
        //         }
        //     },
        //     "UpdateExpression": "set #variable1 = :val1",
        //     "ConditionExpression": "LastPostedBy = :val2",
        //     "ExpressionAttributeNames": {
        //          "#variable1": "LastPostedBy"
        //     },
        //     "ExpressionAttributeValues": {
        //         ":val1": {"S": "alice@example.com"},
        //         ":val2": {"S": "fred@example.com"}
        //     },
        //     "ReturnValues": "ALL_NEW"
        // }

        let updateItemParams = {
            TableName: table,
            ...updateParams
        }

        return new Promise(async (resolve, reject) => {
            dynamodb.update(updateItemParams, async (err, data) => {
                if (err) {
                    reject(err);
                } else
                    resolve(data);
            });
        });
    },
    batchWrite: async (tableName, datas) => {
        let table = getTableName(tableName);
        // console.log("DynamoDB: ", table);

        let putItems = [];
        datas.forEach(item => {
            putItems.push({
                PutRequest: {
                    Item: {
                        ...item
                    }
                }
            });
        });

        let batchPutItemParams = { 
            RequestItems: { }
        }
        batchPutItemParams.RequestItems[table] = putItems,
        console.log(batchPutItemParams);

        return batchWrite(batchPutItemParams);
    }
}