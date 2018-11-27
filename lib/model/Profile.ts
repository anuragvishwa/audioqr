import * as mongoose from "mongoose";
const Schema = mongoose.Schema;
export const userProfile = new Schema({
  id: String,
  googleId: String,
  avatarId: String,
  name: String,
  balance: Number,
  dateCreated: {
    type: Date,
    default: Date.now
  },
  soundId: String,
  pin: Number
});

