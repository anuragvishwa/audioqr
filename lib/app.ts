import * as express from "express";
import * as mongoose from "mongoose";
import * as cookieSession from "cookie-session";
import * as passport from "passport";
import { getKeys as keys } from "./config/KeyProxy";
import { userSchema } from "./model/User";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/crmRoutes";
import * as passportConfig from "./services/passport";
import { getKeys } from "./config/KeyProxy";

class App {
  public app: express.Application;
  public routePrv: Routes = new Routes();

  public mongoUrl: String = keys().getMongoUri();

  constructor() {
    this.app = express();
    this.config();

    this.mongoSetup();
    this.app.use(
      cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys().getCookieKey()]
      })
    );

    this.app.use(passport.initialize());
    this.app.use(passport.session());
    this.routePrv.routes(this.app);
  }

  private mongoSetup(): void {
    mongoose.Promise = global.Promise;
    mongoose.connect(this.mongoUrl);
  }

  private config(): void {
    // support application/json type post data
    this.app.use(bodyParser.json());

    //support application/x-www-form urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));

    //serving static files:
    this.app.use(express.static("public"));
  }
}

export default new App().app;
