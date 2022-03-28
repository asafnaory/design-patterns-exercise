"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectionService = void 0;
class DirectionService {
    constructor(_travelMode) {
        this._travelMode = _travelMode;
    }
    getEta() {
        return this._travelMode.getEta();
    }
    getDirection() {
        return this._travelMode.getDirection();
    }
    get travelMode() {
        return this._travelMode;
    }
    set travelMode(travelMode) {
        this._travelMode = travelMode;
    }
}
exports.DirectionService = DirectionService;
