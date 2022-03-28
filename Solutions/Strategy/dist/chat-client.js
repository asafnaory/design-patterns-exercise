"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatClient = void 0;
class ChatClient {
    constructor(encryptionAlgorithm) {
        this._encryptionAlgorithm = encryptionAlgorithm;
    }
    send(message) {
        const encryptMessage = this._encryptionAlgorithm.encrypt(message);
        console.log("Sending the encrypted message... ", encryptMessage);
    }
}
exports.ChatClient = ChatClient;
