import { Document } from "mongoose";
import { Model } from "mongoose";

export interface IProfile extends Document {
  referenceid: String;
  googleId: String;
  avatarId: String;
  name: String;
  balance: Number;
  soundId: String;
  pin: Number;
}
