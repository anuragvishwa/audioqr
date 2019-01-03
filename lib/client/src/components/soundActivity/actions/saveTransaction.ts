import { FormValidationResult } from "lc-form-validation";
import * as toastr from "toastr";
import { actionTypes } from "../../../common/constants/actionTypes";
import { MemberEntity, TransactionEntity } from "../../../model";
import { transactionAPI } from "../../../api/transaction";
import { transactionFormValidation } from "../transactionFormValidation";
import { trackPromise } from "react-promise-tracker";

export const saveTransactionAction = (
  transaction: TransactionEntity
) => dispatch => {
  trackPromise(
    transactionFormValidation
      .validateForm(transaction)
      .then(formValidationResult => {
        if (formValidationResult.succeeded) {
          saveTransaction(transaction);
        }
        dispatch(saveTransactionActionCompleted(formValidationResult));
      })
  );
};

const saveTransaction = (transaction: TransactionEntity) => {
  trackPromise(
    transactionAPI
      .saveTransaction(transaction)
      .then(() => {
        toastr.success("Transaction saved.");
        history.back();
      })
      .catch(toastr.error)
  );
};

const saveTransactionActionCompleted = (
  formValidationResult: FormValidationResult
) => ({
  type: actionTypes.SAVE_TRANSACTION,
  payload: formValidationResult
});
