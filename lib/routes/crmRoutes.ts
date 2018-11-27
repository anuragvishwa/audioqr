import { Request, Response } from "express";
import * as passport from "passport";
import { isAuthenticated } from "../services/passport";
import { ProfileController } from "../controllers/ProfileController";

export class Routes {
  public profileController: ProfileController = new ProfileController();

  public routes(app): void {
    app.route("/").get((req: Request, res: Response) => {
      res.status(200).send({
        message: "GET request successful!!!"
      });
    });

    app.get("/t", isAuthenticated);

    app.get(
      "/auth/google",
      passport.authenticate("google", {
        scope: ["profile", "email"]
      })
    );

    app.get("/auth/google/callback", passport.authenticate("google"));

    app.get("/api/logout", (req, res) => {
      req.logout();
      res.send(req.user);
    });

    app.get("/api/current_user", (req, res) => {
      res.send(req.user);
    });

    app.get("/api/deleteUser", (req, res) => {
      var promise = Promise.resolve(
        this.profileController.deleteProfile(req.user._id)
      );
      promise
        .then(function(value) {
          res.send(value);
        })
        .catch(error => {
          console.log(error);
        });
    });

    app.get("/api/getUser", (req, res) => {
      var promise = Promise.resolve(
        this.profileController.getProfile(req.user._id)
      );
      promise
        .then(function(value) {
          res.send(value);
        })
        .catch(error => {
          console.log(error);
        });
    });

    app.get("/api/saveUser", (req, res) => {
      var promise = Promise.resolve(
        this.profileController.addNewProfile(req.user._id, req.user.googleId)
      );
      promise
        .then(function(value) {
          res.send(value);
        })
        .catch(error => {
          console.log(error);
        });
    });
  }
}
