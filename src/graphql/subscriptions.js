/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAirport = /* GraphQL */ `
  subscription OnCreateAirport {
    onCreateAirport {
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
export const onUpdateAirport = /* GraphQL */ `
  subscription OnUpdateAirport {
    onUpdateAirport {
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
export const onDeleteAirport = /* GraphQL */ `
  subscription OnDeleteAirport {
    onDeleteAirport {
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
export const onCreateWaypoint = /* GraphQL */ `
  subscription OnCreateWaypoint {
    onCreateWaypoint {
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
export const onUpdateWaypoint = /* GraphQL */ `
  subscription OnUpdateWaypoint {
    onUpdateWaypoint {
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
export const onDeleteWaypoint = /* GraphQL */ `
  subscription OnDeleteWaypoint {
    onDeleteWaypoint {
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
export const onCreateSID = /* GraphQL */ `
  subscription OnCreateSID {
    onCreateSID {
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
export const onUpdateSID = /* GraphQL */ `
  subscription OnUpdateSID {
    onUpdateSID {
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
export const onDeleteSID = /* GraphQL */ `
  subscription OnDeleteSID {
    onDeleteSID {
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
export const onCreateSTAR = /* GraphQL */ `
  subscription OnCreateSTAR {
    onCreateSTAR {
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
export const onUpdateSTAR = /* GraphQL */ `
  subscription OnUpdateSTAR {
    onUpdateSTAR {
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
export const onDeleteSTAR = /* GraphQL */ `
  subscription OnDeleteSTAR {
    onDeleteSTAR {
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
export const onCreateSIDWaypoint = /* GraphQL */ `
  subscription OnCreateSIDWaypoint {
    onCreateSIDWaypoint {
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
export const onUpdateSIDWaypoint = /* GraphQL */ `
  subscription OnUpdateSIDWaypoint {
    onUpdateSIDWaypoint {
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
export const onDeleteSIDWaypoint = /* GraphQL */ `
  subscription OnDeleteSIDWaypoint {
    onDeleteSIDWaypoint {
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
export const onCreateSTARWaypoint = /* GraphQL */ `
  subscription OnCreateSTARWaypoint {
    onCreateSTARWaypoint {
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
export const onUpdateSTARWaypoint = /* GraphQL */ `
  subscription OnUpdateSTARWaypoint {
    onUpdateSTARWaypoint {
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
export const onDeleteSTARWaypoint = /* GraphQL */ `
  subscription OnDeleteSTARWaypoint {
    onDeleteSTARWaypoint {
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
