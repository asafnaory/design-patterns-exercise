"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const email_client_1 = require("./email-client");
const gmail_adapter_1 = require("./gmail-adapter");
const client = new email_client_1.EmailClient();
client.addProvider(new gmail_adapter_1.GmailAdapter());
client.downloadEmails();
