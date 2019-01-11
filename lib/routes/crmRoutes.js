"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Routes {
    routes(app) {
        app.route('/')
            .get((req, res) => {
            res.render("index");
        });
    }
}
exports.Routes = Routes;
//# sourceMappingURL=crmRoutes.js.map