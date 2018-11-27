import * as mongoose from "mongoose";
import { userProfile as prof } from "../model/Profile";
const ProfileModel = mongoose.model("profile", prof);
import { IProfile } from "interface/Profile";

export class ProfileDatabase {
  // public updateUser(generatedProfile: IProfile): IProfile {
  //   return ProfileModel.updateOne({
  //     googleId: generatedProfile.googleId
  //   }).then(existingUser => {
  //     if (existingUser) {
  //       return existingUser;
  //     } else {
  //       return new ProfileModel({
  //         id: generatedProfile.referenceid,
  //         avtarId: generatedProfile.avatarId,
  //         googleId: generatedProfile.googleId,
  //         name: generatedProfile.name,
  //         balance: generatedProfile.balance,
  //         soundId: generatedProfile.soundId,
  //         pin: generatedProfile.pin
  //       })
  //         .save()
  //         .then(ProfileModelObject => {
  //           if (ProfileModelObject) {
  //             return ProfileModelObject;
  //           } else {
  //           }
  //         })
  //         .catch();
  //     }
  //   });
  // }

  public deleteUser(userId: String): String {
    return ProfileModel.deleteOne({ id: userId }, function(err) {
      if (err) return new Error(err);
    });
  }

  public getUser(userId: String): IProfile {
    return ProfileModel.findOne({
      id: userId
    }).then(existingUser => {
      if (existingUser) {
        return existingUser;
      } else {
        throw new Error("no user with that id");
      }
    });
  }

  public saveData(generatedProfile: IProfile): IProfile {
    return ProfileModel.findOne({
      googleId: generatedProfile.googleId
    }).then(existingUser => {
      if (existingUser) {
        return existingUser;
      } else {
        return new ProfileModel({
          id: generatedProfile.referenceid,
          avtarId: generatedProfile.avatarId,
          googleId: generatedProfile.googleId,
          name: generatedProfile.name,
          balance: generatedProfile.balance,
          soundId: generatedProfile.soundId,
          pin: generatedProfile.pin
        })
          .save()
          .then(ProfileModelObject => {
            if (ProfileModelObject) {
              return ProfileModelObject;
            } else {
            }
          })
          .catch();
      }
    });
  }
}
