import { actionTypes } from "../common/constants/actionTypes";
import { TransactionEntity } from "../model";

const createEmptyTransaction = (): TransactionEntity => ({
  transaction_amount: 0,
  transaction_party: null,
  transaction_status: null,
  transaction_time: null,
  transaction_type: null,
  id: null,
  avtart_url: null
});

export const transactionReducer = (
  state: TransactionEntity = createEmptyTransaction(),
  action
) => {
  switch (action.type) {
    case actionTypes.FETCH_TRANSACTION_BY_ID_COMPLETED:
      return handleFetchTransactionCompleted(state, action.payload);
  }
  return state;
};

const handleFetchTransactionCompleted = (
  state: TransactionEntity = createEmptyTransaction(),
  payload: TransactionEntity = createEmptyTransaction()
): TransactionEntity => {
  return payload;
};
