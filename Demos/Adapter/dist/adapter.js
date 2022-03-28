"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Adapter = void 0;
const target_1 = require("./target");
/**
 * The Adapter makes the Adaptee's interface compatible with the Target's
 * interface.
 */
class Adapter extends target_1.Target {
    constructor(adaptee) {
        super();
        this.adaptee = adaptee;
    }
    request() {
        const result = this.adaptee.specificRequest().split("").reverse().join("");
        return `Adapter: (TRANSLATED) ${result}`;
    }
}
exports.Adapter = Adapter;
