# DB tables

1. Airport
2. Waypoints
3. SID (Departure Instruction)
4. STAR (Arrival Instruction)

# API needed

1. Download Data: Fetch All Data into DB
    - Airport => https://open-atms.airlab.aero/api/v1/airac/airports
    - Waypoints => https://open-atms.airlab.aero/api/v1/airac/waypoints
    - Iterate Airports
      - Get SID by ICAO => https://open-atms.airlab.aero/api/v1/airac/sids/airport/{icao}
      - Get Star by ICAO => https://open-atms.airlab.aero/api/v1/airac/stars/airport/{icao}
2. List all Airport
3. 