"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GmailClient = void 0;
class GmailClient {
    connect() {
        console.log("Connecting to Gmail");
    }
    getEmails() {
        console.log("Downloading emails from Gmail");
    }
    disconnect() {
        console.log("Disconnecting from Gmail");
    }
}
exports.GmailClient = GmailClient;
