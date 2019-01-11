"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const crmRoutes_1 = require("./routes/crmRoutes");
const path_1 = require("path");
class App {
    constructor() {
        this.routePrv = new crmRoutes_1.Routes();
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
    }
    config() {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.set('views', path_1.join(__dirname, '../dist'));
        this.app.set('view engine', 'ejs');
        this.app.use(express.static(path_1.join(__dirname, '../dist')));
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map