import * as React from "react";
import { Link } from "react-router-dom";
import { TransactionEntity } from "../../model";
import TransactionCol from "./transactionCol";

interface Props {
  transactions: TransactionEntity[];
  fetchTransactions(): void;
}

export class TransactionsPage extends React.Component<Props, {}> {
  constructor(props) {
    super(props);
    this.state = {
      transactions: []
    };
  }
  public componentDidMount() {
    this.props.fetchTransactions();
  }

  public render() {
    return (
      <div className="row">
        <div className="col-5">
          <div className="row">
            <h2> Transactions Page</h2>
            <Link to="/card">Transactions</Link>
          </div>
          {this.props.transactions.map(transaction => (
            <TransactionCol key={transaction.id} transaction={transaction} />
          ))}
        </div>
      </div>
    );
  }
}
