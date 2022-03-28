"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const direction_service_1 = require("./direction-service");
const bicyling_1 = require("./travel-modes/bicyling");
const driving_1 = require("./travel-modes/driving");
const walking_1 = require("./travel-modes/walking");
const service = new direction_service_1.DirectionService(new walking_1.Walking());
service.getEta();
service.getDirection();
service.travelMode = new driving_1.Driving();
console.log("");
service.getEta();
service.getDirection();
service.travelMode = new bicyling_1.Bicyling();
console.log("");
service.getEta();
service.getDirection();
