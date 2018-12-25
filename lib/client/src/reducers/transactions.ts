import { actionTypes } from "../common/constants/actionTypes";
import { TransactionEntity } from "../model";

export const transactionsReducer = (
  state: TransactionEntity[] = [],
  action
) => {
  switch (action.type) {
    case actionTypes.FETCH_TRANSACTIONS_COMPLETED:
      return handleFetchTransactionsCompleted(state, action.payload);
  }

  return state;
};

const handleFetchTransactionsCompleted = (
  state: TransactionEntity[],
  payload: TransactionEntity[]
) => {
  return payload;
};
