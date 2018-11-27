import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

export const userSchema = new Schema({
  googleId: String
});
