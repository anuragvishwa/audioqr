import * as mongoose from "mongoose";
const Scehma = mongoose.Schema;
export const userTransaction = new Scehma({
  id: String,
  name: String,
  dateCreated: {
    type: Date,
    default: Date.now
  },
  from: String,
  to: String,
  status: Number,
  transactionId: String,
  message: Text
});
