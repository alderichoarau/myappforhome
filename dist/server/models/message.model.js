"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var messageSchema = new mongoose.Schema({
    lastname: String,
    firstname: String,
    email: String,
    subject: String,
    messageClient: String
});
var Message = mongoose.model('Message', messageSchema);
exports.default = Message;
//# sourceMappingURL=message.model.js.map