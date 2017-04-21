"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cats_1 = require("./controllers/cats");
function setRoutes(app) {
    var cats = new cats_1.default();
    // APIs
    app.route('/api/cats').get(cats.getAll);
    app.route('/api/cats/count').get(cats.count);
    app.route('/api/cat').post(cats.insert);
    app.route('/api/cat/:id').get(cats.get);
    app.route('/api/cat/:id').put(cats.update);
    app.route('/api/cat/:id').delete(cats.delete);
}
exports.default = setRoutes;
//# sourceMappingURL=routes.js.map