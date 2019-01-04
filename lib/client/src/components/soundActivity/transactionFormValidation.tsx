import {
  Validators,
  ValidationConstraints,
  createFormValidation
} from "lc-form-validation";

const validationConstraints: ValidationConstraints = {
  fields: {
    transaction_party: [{ validator: Validators.required }],

    transaction_status: [{ validator: Validators.required }],
    transaction_amount: [{ validator: Validators.required }],
    transaction_type: [{ validator: Validators.required }],
    id: [{ validator: Validators.required }]
  }
};

export const transactionFormValidation = createFormValidation(
  validationConstraints
);
