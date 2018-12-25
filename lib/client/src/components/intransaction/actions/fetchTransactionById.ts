import { actionTypes } from "../../../common/constants/actionTypes";
import { trackPromise } from "react-promise-tracker";
import { transactionAPI } from "../../../api/transaction";
import { TransactionEntity } from "../../../model";

export const fetchTransactionAction = (id: number) => dispatch => {
  trackPromise(
    transactionAPI.fetchTransactionByIdAsync(id).then(transaction => {
      dispatch(fetchTransactionCompleted(transaction));
    })
  );
};

const fetchTransactionCompleted = (transaction: TransactionEntity) => ({
  type: actionTypes.FETCH_TRANSACTION_BY_ID_COMPLETED,
  payload: transaction
});
