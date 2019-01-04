export interface TransactionEntity {
  id: number;
  transaction_party: string;
  transaction_time: Date;
  transaction_status: String;
  transaction_amount: number;
  transaction_type: string;
  member_id: number;
}
