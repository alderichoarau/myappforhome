"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cats_1 = require("./controllers/cats");
var messages_1 = require("./controllers/messages");
function setRoutes(app) {
    var cats = new cats_1.default();
    var messages = new messages_1.default();
    // APIs cats
    app.route('/api/cats').get(cats.getAll);
    app.route('/api/cats/count').get(cats.count);
    app.route('/api/cat').post(cats.insert);
    app.route('/api/cat/:id').get(cats.get);
    app.route('/api/cat/:id').put(cats.update);
    app.route('/api/cat/:id').delete(cats.delete);
    // APIs messages
    app.route('/api/messages').get(messages.getAll);
    app.route('/api/messages/count').get(messages.count);
    app.route('/api/message').post(messages.insert);
    app.route('/api/message/:id').get(messages.get);
    app.route('/api/message/:id').put(messages.update);
    app.route('/api/message/:id').delete(messages.delete);
}
exports.default = setRoutes;
//# sourceMappingURL=routes.js.map