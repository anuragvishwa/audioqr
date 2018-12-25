import * as React from "react";
import { Route, HashRouter as Router, Switch } from "react-router-dom";
//import { DecoratedClass } from "./components/transaction/transactionRow";
import { App } from "./app";
import {
  About,
  MembersPageContainer,
  MemberPageContainer,
  TransactionsPageContainer,
  TransactionPageContainer,
  SoundPageContainer
} from "./components";
import { Provider } from "react-redux";
import { store } from "./store";

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="container-fluid">
          <Route component={App} />
          <Switch>
            <Route exact path="/" component={About} />
            <Route path="/about" component={About} />
            <Route path="/members" component={MembersPageContainer} />
            <Route exact path="/member" component={MemberPageContainer} />
            <Route path="/member/:id" component={MemberPageContainer} />
            <Route path="/transactions" component={TransactionsPageContainer} />
            <Route
              path="/transaction/:id"
              component={TransactionPageContainer}
            />
            <Route path="/sound/:id" component={SoundPageContainer} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};
