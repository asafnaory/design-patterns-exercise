"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailClient = void 0;
class EmailClient {
    constructor() {
        this.providers = [];
    }
    addProvider(provider) {
        this.providers.push(provider);
    }
    downloadEmails() {
        this.providers.forEach((provider) => provider.downloadEmails());
    }
}
exports.EmailClient = EmailClient;
