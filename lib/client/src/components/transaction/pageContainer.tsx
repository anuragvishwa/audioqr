import * as React from "react";
import { connect } from "react-redux";
import { State } from "../../reducers";
import { fetchTranscationsAction } from "./actions";
import { TransactionsPage } from "./page";

const mapStateToProps = (state: State) => ({
  transactions: state.transactions
});

const mapDispatchToProps = dispatch => ({
  fetchTransactions: () => dispatch(fetchTranscationsAction())
});

export const TransactionsPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionsPage);
