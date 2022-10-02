export type AmplifyDependentResourcesAttributes = {
    "api": {
        "thalesairlabbackend": {
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    },
    "function": {
        "thalesApi": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "thalesairlabbackendlayer": {
            "Arn": "string"
        }
    },
    "auth": {
        "thales": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "custom": {
        "SES": {
            "Region": "string"
        }
    }
}