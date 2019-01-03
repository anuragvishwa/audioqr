import { TransactionEntity } from "../../model";

export const transactions: TransactionEntity[] = [
  {
    id: 1457912,
    transaction_amount: 20,
    transaction_party: "icici bank",
    transaction_type: "debit",

    transaction_status: "Pending",
    transaction_time: Date()
  },
  {
    id: 1457913,
    transaction_amount: 201,
    transaction_party: "icici bank",
    transaction_type: "credit",

    transaction_status: "Completed",
    transaction_time: Date()
  }
];
