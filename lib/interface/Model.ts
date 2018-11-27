import { Model } from "mongoose";
import { IProfile } from "./Profile";

export interface Model {
  profile: Model<IProfile>;
}
