CREATE DATABASE thales_airlab;

CREATE TABLE `Airport` (
    `uid` VARCHAR(255) PRIMARY KEY,
    `name` VARCHAR(255) NULL,
    `icao` VARCHAR(255) NULL,
    `lat` DECIMAL(13,9) NULL,
    `lng` DECIMAL(13,9) NULL,
    `alt` INT NULL
);

CREATE TABLE `Waypoint` (
    `uid` VARCHAR(255) PRIMARY KEY,
    `name` VARCHAR(255) NULL,
    `lat` DECIMAL(13,9) NULL,
    `lng` DECIMAL(13,9) NULL
);

CREATE TABLE `SID` (
    `name` VARCHAR(255) PRIMARY KEY,
    `airportUID` VARCHAR(255) NOT NULL,

    FOREIGN KEY (`airportUID`) REFERENCES Airport(`uid`)
);

CREATE TABLE `SIDWaypoint` (
    `SIDName` VARCHAR(255) NOT NULL,
    `waypointUID` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`SIDName`, `waypointUID`),
    FOREIGN KEY (`SIDName`) REFERENCES SID(`name`),
    FOREIGN KEY (`waypointUID`) REFERENCES Waypoint(`uid`)
);

CREATE TABLE `STAR` (
    `name` VARCHAR(255) PRIMARY KEY,
    `airportUID` VARCHAR(255) NOT NULL,

    FOREIGN KEY (`airportUID`) REFERENCES Airport(`uid`)
);

CREATE TABLE `STARWaypoint` (
    `STARName` VARCHAR(255) NOT NULL,
    `waypointUID` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`STARName`, `waypointUID`),
    FOREIGN KEY (`STARName`) REFERENCES STAR(`name`),
    FOREIGN KEY (`waypointUID`) REFERENCES Waypoint(`uid`)
);