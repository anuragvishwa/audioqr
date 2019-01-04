import { TransactionEntity } from "../../model";
import { transactions } from "./mockData";

const baseURL = "http://anurag.getsandbox.com";
const transactionURL = "https://api.github.com/user";
//const repoURL = "https://api.github.com/orgs/lemoncode/repos";
let mockTransactions = transactions;

const fetchTransactions = (): Promise<TransactionEntity[]> => {
  return Promise.resolve(mockTransactions);
};

const fetchTransactionsAsync = (): Promise<TransactionEntity[]> => {
  const transactionURL = `${baseURL}/transaction`;

  return fetch(transactionURL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(mapToTransactions);
};

const mapToTransactions = (userTransactions: any[]): TransactionEntity[] => {
  return userTransactions.map(mapToTransaction);
};

const mapToTransaction = (userTransaction): TransactionEntity => {
  return {
    id: userTransaction.id,
    transaction_amount: userTransaction.transaction_amount,
    transaction_party: userTransaction.transaction_party,
    transaction_status: userTransaction.transaction_status,
    transaction_time: userTransaction.transaction_time,
    transaction_type: userTransaction.transaction_type,
    member_id: userTransaction.following
  };
};

const mapToTransactionAsync = (userTransaction): TransactionEntity => {
  return {
    id: userTransaction.id,
    transaction_amount: userTransaction.followers,
    transaction_party: userTransaction.name,
    transaction_status: userTransaction.hireables,
    transaction_time: userTransaction.created_at,
    transaction_type: userTransaction.login,
    member_id: userTransaction.following
  };
};

const fetchTransactionById = (id: number): Promise<TransactionEntity> => {
  const transaction = transactions.find(m => m.id === id);

  return Promise.resolve(transaction);
};

const fetchTransactionByIdAsync = (id: number): Promise<TransactionEntity> => {
  const transactionsURL = `${transactionURL}/${id}`;
  return fetch(transactionsURL)
    .then(response => response.json())
    .then(mapToTransactionAsync);
};

const saveTransaction = (transaction: TransactionEntity): Promise<boolean> => {
  // const index = mockTransactions.findIndex(t => t.id === transaction.id);

  // index >= 0 ? updateMember(member, index) : insertMember(member);
  console.log(transaction);
  insertTransaction(transaction);
  return Promise.resolve(true);
};

// const updateMember = (member: MemberEntity, index: number) => {
//   mockMembers = [
//     ...mockMembers.slice(0, index),
//     member,
//     ...mockMembers.slice(index + 1)
//   ];
// };

const insertTransaction = (transaction: TransactionEntity) => {
  // transaction.id = mockTransactions.length;

  mockTransactions = [...mockTransactions, transaction];
};

export const transactionAPI = {
  fetchTransactions,
  fetchTransactionsAsync,
  fetchTransactionById,
  fetchTransactionByIdAsync,
  saveTransaction
};
