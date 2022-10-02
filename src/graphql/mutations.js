/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const deleteAirport = /* GraphQL */ `
  mutation DeleteAirport(
    $input: DeleteAirportInput!
    $condition: ModelAirportConditionInput
  ) {
    deleteAirport(input: $input, condition: $condition) {
      uid
      name
      icao
      lat
      lng
      alt
      SIDs {
        items {
          name
          airportUID
          createdAt
          updatedAt
          airportSIDsId
        }
        nextToken
      }
      STARs {
        items {
          name
          airportUID
          createdAt
          updatedAt
          airportSTARsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteWaypoint = /* GraphQL */ `
  mutation DeleteWaypoint(
    $input: DeleteWaypointInput!
    $condition: ModelWaypointConditionInput
  ) {
    deleteWaypoint(input: $input, condition: $condition) {
      uid
      name
      lat
      lng
      SIDs {
        items {
          id
          waypointID
          sIDID
          createdAt
          updatedAt
        }
        nextToken
      }
      STARs {
        items {
          id
          waypointID
          sTARID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteSID = /* GraphQL */ `
  mutation DeleteSID(
    $input: DeleteSIDInput!
    $condition: ModelSIDConditionInput
  ) {
    deleteSID(input: $input, condition: $condition) {
      name
      airportUID
      airport {
        uid
        name
        icao
        lat
        lng
        alt
        SIDs {
          nextToken
        }
        STARs {
          nextToken
        }
        createdAt
        updatedAt
      }
      waypoints {
        items {
          id
          waypointID
          sIDID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      airportSIDsId
    }
  }
`;
export const deleteSTAR = /* GraphQL */ `
  mutation DeleteSTAR(
    $input: DeleteSTARInput!
    $condition: ModelSTARConditionInput
  ) {
    deleteSTAR(input: $input, condition: $condition) {
      name
      airportUID
      airport {
        uid
        name
        icao
        lat
        lng
        alt
        SIDs {
          nextToken
        }
        STARs {
          nextToken
        }
        createdAt
        updatedAt
      }
      waypoints {
        items {
          id
          waypointID
          sTARID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      airportSTARsId
    }
  }
`;
export const deleteSIDWaypoint = /* GraphQL */ `
  mutation DeleteSIDWaypoint(
    $input: DeleteSIDWaypointInput!
    $condition: ModelSIDWaypointConditionInput
  ) {
    deleteSIDWaypoint(input: $input, condition: $condition) {
      id
      waypointID
      sIDID
      waypoint {
        uid
        name
        lat
        lng
        SIDs {
          nextToken
        }
        STARs {
          nextToken
        }
        createdAt
        updatedAt
      }
      sID {
        name
        airportUID
        airport {
          uid
          name
          icao
          lat
          lng
          alt
          createdAt
          updatedAt
        }
        waypoints {
          nextToken
        }
        createdAt
        updatedAt
        airportSIDsId
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteSTARWaypoint = /* GraphQL */ `
  mutation DeleteSTARWaypoint(
    $input: DeleteSTARWaypointInput!
    $condition: ModelSTARWaypointConditionInput
  ) {
    deleteSTARWaypoint(input: $input, condition: $condition) {
      id
      waypointID
      sTARID
      waypoint {
        uid
        name
        lat
        lng
        SIDs {
          nextToken
        }
        STARs {
          nextToken
        }
        createdAt
        updatedAt
      }
      sTAR {
        name
        airportUID
        airport {
          uid
          name
          icao
          lat
          lng
          alt
          createdAt
          updatedAt
        }
        waypoints {
          nextToken
        }
        createdAt
        updatedAt
        airportSTARsId
      }
      createdAt
      updatedAt
    }
  }
`;
export const createAirport = /* GraphQL */ `
  mutation CreateAirport(
    $input: CreateAirportInput!
    $condition: ModelAirportConditionInput
  ) {
    createAirport(input: $input, condition: $condition) {
      uid
      name
      icao
      lat
      lng
      alt
      SIDs {
        items {
          name
          airportUID
          createdAt
          updatedAt
          airportSIDsId
        }
        nextToken
      }
      STARs {
        items {
          name
          airportUID
          createdAt
          updatedAt
          airportSTARsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateAirport = /* GraphQL */ `
  mutation UpdateAirport(
    $input: UpdateAirportInput!
    $condition: ModelAirportConditionInput
  ) {
    updateAirport(input: $input, condition: $condition) {
      uid
      name
      icao
      lat
      lng
      alt
      SIDs {
        items {
          name
          airportUID
          createdAt
          updatedAt
          airportSIDsId
        }
        nextToken
      }
      STARs {
        items {
          name
          airportUID
          createdAt
          updatedAt
          airportSTARsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createWaypoint = /* GraphQL */ `
  mutation CreateWaypoint(
    $input: CreateWaypointInput!
    $condition: ModelWaypointConditionInput
  ) {
    createWaypoint(input: $input, condition: $condition) {
      uid
      name
      lat
      lng
      SIDs {
        items {
          id
          waypointID
          sIDID
          createdAt
          updatedAt
        }
        nextToken
      }
      STARs {
        items {
          id
          waypointID
          sTARID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateWaypoint = /* GraphQL */ `
  mutation UpdateWaypoint(
    $input: UpdateWaypointInput!
    $condition: ModelWaypointConditionInput
  ) {
    updateWaypoint(input: $input, condition: $condition) {
      uid
      name
      lat
      lng
      SIDs {
        items {
          id
          waypointID
          sIDID
          createdAt
          updatedAt
        }
        nextToken
      }
      STARs {
        items {
          id
          waypointID
          sTARID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createSID = /* GraphQL */ `
  mutation CreateSID(
    $input: CreateSIDInput!
    $condition: ModelSIDConditionInput
  ) {
    createSID(input: $input, condition: $condition) {
      name
      airportUID
      airport {
        uid
        name
        icao
        lat
        lng
        alt
        SIDs {
          nextToken
        }
        STARs {
          nextToken
        }
        createdAt
        updatedAt
      }
      waypoints {
        items {
          id
          waypointID
          sIDID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      airportSIDsId
    }
  }
`;
export const updateSID = /* GraphQL */ `
  mutation UpdateSID(
    $input: UpdateSIDInput!
    $condition: ModelSIDConditionInput
  ) {
    updateSID(input: $input, condition: $condition) {
      name
      airportUID
      airport {
        uid
        name
        icao
        lat
        lng
        alt
        SIDs {
          nextToken
        }
        STARs {
          nextToken
        }
        createdAt
        updatedAt
      }
      waypoints {
        items {
          id
          waypointID
          sIDID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      airportSIDsId
    }
  }
`;
export const createSTAR = /* GraphQL */ `
  mutation CreateSTAR(
    $input: CreateSTARInput!
    $condition: ModelSTARConditionInput
  ) {
    createSTAR(input: $input, condition: $condition) {
      name
      airportUID
      airport {
        uid
        name
        icao
        lat
        lng
        alt
        SIDs {
          nextToken
        }
        STARs {
          nextToken
        }
        createdAt
        updatedAt
      }
      waypoints {
        items {
          id
          waypointID
          sTARID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      airportSTARsId
    }
  }
`;
export const updateSTAR = /* GraphQL */ `
  mutation UpdateSTAR(
    $input: UpdateSTARInput!
    $condition: ModelSTARConditionInput
  ) {
    updateSTAR(input: $input, condition: $condition) {
      name
      airportUID
      airport {
        uid
        name
        icao
        lat
        lng
        alt
        SIDs {
          nextToken
        }
        STARs {
          nextToken
        }
        createdAt
        updatedAt
      }
      waypoints {
        items {
          id
          waypointID
          sTARID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      airportSTARsId
    }
  }
`;
export const createSIDWaypoint = /* GraphQL */ `
  mutation CreateSIDWaypoint(
    $input: CreateSIDWaypointInput!
    $condition: ModelSIDWaypointConditionInput
  ) {
    createSIDWaypoint(input: $input, condition: $condition) {
      id
      waypointID
      sIDID
      waypoint {
        uid
        name
        lat
        lng
        SIDs {
          nextToken
        }
        STARs {
          nextToken
        }
        createdAt
        updatedAt
      }
      sID {
        name
        airportUID
        airport {
          uid
          name
          icao
          lat
          lng
          alt
          createdAt
          updatedAt
        }
        waypoints {
          nextToken
        }
        createdAt
        updatedAt
        airportSIDsId
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateSIDWaypoint = /* GraphQL */ `
  mutation UpdateSIDWaypoint(
    $input: UpdateSIDWaypointInput!
    $condition: ModelSIDWaypointConditionInput
  ) {
    updateSIDWaypoint(input: $input, condition: $condition) {
      id
      waypointID
      sIDID
      waypoint {
        uid
        name
        lat
        lng
        SIDs {
          nextToken
        }
        STARs {
          nextToken
        }
        createdAt
        updatedAt
      }
      sID {
        name
        airportUID
        airport {
          uid
          name
          icao
          lat
          lng
          alt
          createdAt
          updatedAt
        }
        waypoints {
          nextToken
        }
        createdAt
        updatedAt
        airportSIDsId
      }
      createdAt
      updatedAt
    }
  }
`;
export const createSTARWaypoint = /* GraphQL */ `
  mutation CreateSTARWaypoint(
    $input: CreateSTARWaypointInput!
    $condition: ModelSTARWaypointConditionInput
  ) {
    createSTARWaypoint(input: $input, condition: $condition) {
      id
      waypointID
      sTARID
      waypoint {
        uid
        name
        lat
        lng
        SIDs {
          nextToken
        }
        STARs {
          nextToken
        }
        createdAt
        updatedAt
      }
      sTAR {
        name
        airportUID
        airport {
          uid
          name
          icao
          lat
          lng
          alt
          createdAt
          updatedAt
        }
        waypoints {
          nextToken
        }
        createdAt
        updatedAt
        airportSTARsId
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateSTARWaypoint = /* GraphQL */ `
  mutation UpdateSTARWaypoint(
    $input: UpdateSTARWaypointInput!
    $condition: ModelSTARWaypointConditionInput
  ) {
    updateSTARWaypoint(input: $input, condition: $condition) {
      id
      waypointID
      sTARID
      waypoint {
        uid
        name
        lat
        lng
        SIDs {
          nextToken
        }
        STARs {
          nextToken
        }
        createdAt
        updatedAt
      }
      sTAR {
        name
        airportUID
        airport {
          uid
          name
          icao
          lat
          lng
          alt
          createdAt
          updatedAt
        }
        waypoints {
          nextToken
        }
        createdAt
        updatedAt
        airportSTARsId
      }
      createdAt
      updatedAt
    }
  }
`;
