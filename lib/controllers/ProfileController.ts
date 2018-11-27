import * as mongoose from "mongoose";
import { userProfile as prof } from "../model/Profile";
import { Request, Response } from "express";
import { Avtar } from "../utils/Avtar";
import * as randomString from "randomstring";
import { ProfileDatabase as PD } from "../orm/Profile";
import { ProfileInterface } from "./ProfileInterface";
import { IProfile } from "interface/Profile";

class NewProfile implements IProfile {
  referenceid: String;
  googleId: String;
  avatarId: String;
  name: String;
  balance: Number;
  soundId: String;
  pin: Number;
}

export class ProfileController implements ProfileInterface {
  static ProfileDB: PD = new PD();

  deleteProfile(userId: String): String {
    var deleteObject: String = ProfileController.ProfileDB.deleteUser(userId);
    return deleteObject;
  }
  updateProfile() {
    throw new Error("Method not implemented.");
  }
  getProfile(userId: String): IProfile {
    var readObject: IProfile = ProfileController.ProfileDB.getUser(userId);
    return readObject;
  }

  public addNewProfile(userId: String, googleId: String): IProfile {
    var avtar: Avtar = new Avtar();
    var random: String = randomString.generate(12);
    avtar.avtarId = random;
    var randomSound: String = randomString.generate(12);
    var generatedProfile: IProfile = new NewProfile();
    generatedProfile.avatarId = avtar.avtarId;
    generatedProfile.balance = 123;
    generatedProfile.googleId = googleId;
    generatedProfile.name = "Anurag";
    generatedProfile.pin = 787;
    generatedProfile.referenceid = userId;
    generatedProfile.soundId = randomSound;

    var generatedObject: IProfile = ProfileController.ProfileDB.saveData(
      generatedProfile
    );

    return generatedObject;
  }
}
