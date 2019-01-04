import { TransactionEntity } from "../../model";

export const transactions: TransactionEntity[] = [
  {
    id: 1457912,
    transaction_amount: 20,
    transaction_party: "icici bank",
    transaction_type: "debit",
    member_id: 93,
    transaction_status: "Pending",
    transaction_time: new Date()
  },
  {
    id: 1457913,
    transaction_amount: 201,
    transaction_party: "icici bank",
    transaction_type: "credit",
    member_id: 94,
    transaction_status: "Completed",
    transaction_time: new Date()
  }
];
