/*
Use the following code to retrieve configured secrets from SSM:

const aws = require('aws-sdk');

const { Parameters } = await (new aws.SSM())
  .getParameters({
    Names: ["apiKey","rds_name","rds_username","rds_password","rds_port","rds_database"].map(secretName => process.env[secretName]),
    WithDecryption: true,
  })
  .promise();

Parameters will be of the form { Name: 'secretName', Value: 'secretValue', ... }[]
*/

const getTopAirportSID = require('./handler/getTopAirportSID');
const getTopAirportSTAR = require('./handler/getTopAirportSTAR');
const loadData = require('./handler/loadData');


/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(event);
  
    try {
      const { fieldName } = event;
  
      switch (fieldName) {
        case "loadData":
            return loadData(event);
        case "getTopAirportSID":
          return getTopAirportSID(event);
        case "getTopAirportSTAR":
          return getTopAirportSTAR(event);
        default:
          throw Error(`Unhandled fieldname '${fieldName}'.`);
      }
    } catch (err) {
      console.log(err);
      return {
        success: false,
        message: err.message,
      };
    }
  };
  