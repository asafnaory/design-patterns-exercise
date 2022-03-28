"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adaptee_1 = require("./adaptee");
const adapter_1 = require("./adapter");
const target_1 = require("./target");
/**
 * The client code supports all classes that follow the Target interface.
 */
function clientCode(target) {
    console.log(target.request());
}
console.log('Client: I can work just fine with the Target objects:');
const target = new target_1.Target();
clientCode(target);
console.log('');
const adaptee = new adaptee_1.Adaptee();
console.log('Client: The Adaptee class has a weird interface. See, I don\'t understand it:');
console.log(`Adaptee: ${adaptee.specificRequest()}`);
console.log('');
console.log('Client: But I can work with it via the Adapter:');
const adapter = new adapter_1.Adapter(adaptee);
clientCode(adapter);
