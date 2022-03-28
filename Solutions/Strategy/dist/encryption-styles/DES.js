"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DES = void 0;
class DES {
    encrypt(messge) {
        const encryptMessge = this.reverseString(messge);
        console.log("Encrypting message using DES");
        return encryptMessge;
    }
    reverseString(str) {
        let splitString = str.split("");
        let reverseArray = splitString.reverse();
        let joinArray = reverseArray.join("");
        return joinArray;
    }
}
exports.DES = DES;
