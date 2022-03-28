"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GmailAdapter = void 0;
const gmail_client_1 = require("./Gmail/gmail-client");
class GmailAdapter {
    constructor() {
        this.client = new gmail_client_1.GmailClient();
    }
    downloadEmails() {
        this.client.connect();
        this.client.getEmails();
        this.client.disconnect();
    }
}
exports.GmailAdapter = GmailAdapter;
