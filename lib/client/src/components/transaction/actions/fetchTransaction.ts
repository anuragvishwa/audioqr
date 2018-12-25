import { actionTypes } from "../../../common/constants/actionTypes";
import { TransactionEntity } from "../../../model";
import { transactionAPI } from "../../../api/transaction";
import { trackPromise } from "react-promise-tracker";

export const fetchTranscationsAction = () => dispatch => {
  trackPromise(
    transactionAPI.fetchTransactionsAsync().then(transactions => {
      dispatch(fetchTransactionsCompleted(transactions));
    })
  );
};

const fetchTransactionsCompleted = (transactions: TransactionEntity[]) => ({
  type: actionTypes.FETCH_TRANSACTIONS_COMPLETED,
  payload: transactions
});
