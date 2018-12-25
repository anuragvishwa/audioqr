import { connect } from "react-redux";
import { State } from "../../reducers";
import { fetchTransactionAction } from "./actions";
import { TransactionPage } from "./page";

const mapStateToProps = (state: State, ownProps: any) => ({
  transactionId: Number(ownProps.match.params.id) || 0,
  transaction: state.transaction
});

const mapDispatchToProps = dispatch => ({
  fetchTransactionById: (id: number) => dispatch(fetchTransactionAction(id))
});

export const TransactionPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionPage);
