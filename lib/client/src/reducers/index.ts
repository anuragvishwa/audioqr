import { combineReducers } from "redux";
import {
  MemberEntity,
  MemberErrors,
  RepositoryEntity,
  TransactionEntity,
  SoundEntity
} from "../model";
import { membersReducer } from "./members";
import { transactionsReducer } from "./transactions";
import { memberReducer } from "./member";
import { memberErrorsReducer } from "./memberErrors";
import { repositoriesReducer } from "./repositories";
import { transactionReducer } from "./transaction";
import { soundReducer } from "./sound";

export interface State {
  members: MemberEntity[];
  member: MemberEntity;
  memberErrors: MemberErrors;
  repositories: RepositoryEntity[];
  transactions: TransactionEntity[];
  transaction: TransactionEntity;
  sound_activity: MemberEntity;
}

export const state = combineReducers<State>({
  members: membersReducer,
  member: memberReducer,
  memberErrors: memberErrorsReducer,
  repositories: repositoriesReducer,
  transactions: transactionsReducer,
  transaction: transactionReducer,
  sound_activity: soundReducer
});
