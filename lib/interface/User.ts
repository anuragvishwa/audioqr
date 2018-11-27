import { Document } from "mongoose";
import { Model } from "mongoose";

export interface IUSer extends Document {
  googleId: String;
}
