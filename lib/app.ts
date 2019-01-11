import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/crmRoutes";
import { join } from "path"

class App {

    public app: express.Application;
    public routePrv: Routes = new Routes();

    constructor() {
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);  
    }

    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.set('views', join(__dirname, '../dist'));
        this.app.set('view engine', 'ejs');
        this.app.use(express.static(join(__dirname, '../dist')));
    }

}

export default new App().app;