"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AES = void 0;
class AES {
    encrypt(messge) {
        const encryptMessage = messge.toLocaleUpperCase();
        console.log("Encrypting message using AES");
        return encryptMessage;
    }
}
exports.AES = AES;
