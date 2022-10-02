/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const loadData = /* GraphQL */ `
  query LoadData {
    loadData
  }
`;
export const getAirport = /* GraphQL */ `
  query GetAirport($uid: String!) {
    getAirport(uid: $uid) {
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
export const listAirports = /* GraphQL */ `
  query ListAirports(
    $uid: String
    $filter: ModelAirportFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listAirports(
      uid: $uid
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getWaypoint = /* GraphQL */ `
  query GetWaypoint($uid: String!) {
    getWaypoint(uid: $uid) {
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
export const listWaypoints = /* GraphQL */ `
  query ListWaypoints(
    $uid: String
    $filter: ModelWaypointFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listWaypoints(
      uid: $uid
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getSID = /* GraphQL */ `
  query GetSID($name: String!) {
    getSID(name: $name) {
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
export const listSIDS = /* GraphQL */ `
  query ListSIDS(
    $name: String
    $filter: ModelSIDFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSIDS(
      name: $name
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getSTAR = /* GraphQL */ `
  query GetSTAR($name: String!) {
    getSTAR(name: $name) {
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
export const listSTARS = /* GraphQL */ `
  query ListSTARS(
    $name: String
    $filter: ModelSTARFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSTARS(
      name: $name
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getSIDWaypoint = /* GraphQL */ `
  query GetSIDWaypoint($id: ID!) {
    getSIDWaypoint(id: $id) {
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
export const listSIDWaypoints = /* GraphQL */ `
  query ListSIDWaypoints(
    $filter: ModelSIDWaypointFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSIDWaypoints(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        waypointID
        sIDID
        waypoint {
          uid
          name
          lat
          lng
          createdAt
          updatedAt
        }
        sID {
          name
          airportUID
          createdAt
          updatedAt
          airportSIDsId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSTARWaypoint = /* GraphQL */ `
  query GetSTARWaypoint($id: ID!) {
    getSTARWaypoint(id: $id) {
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
export const listSTARWaypoints = /* GraphQL */ `
  query ListSTARWaypoints(
    $filter: ModelSTARWaypointFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSTARWaypoints(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        waypointID
        sTARID
        waypoint {
          uid
          name
          lat
          lng
          createdAt
          updatedAt
        }
        sTAR {
          name
          airportUID
          createdAt
          updatedAt
          airportSTARsId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
