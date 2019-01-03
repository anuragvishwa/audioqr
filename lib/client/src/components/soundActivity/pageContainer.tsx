import { connect } from "react-redux";
import { State } from "../../reducers";
import { SoundEntity, TransactionEntity } from "../../model";
import { fetchReceiveRequest } from "./actions/fetchReceiveRequest";
import { fetchMemberById } from "./actions/fetchMemberById";
import { SoundActivity } from "./page";
import { MemberEntity } from "../../model";
import { saveTransactionAction } from "./actions/saveTransaction";

const mapStateToProps = (state: State, ownProps: any) => ({
  sound: state.sound_activity,
  member: state.sound_activity,
  soundId: Number(ownProps.match.params.id) || 0,
  transaction: state.transaction
});

const mapDispatchToProps = dispatch => ({
  fetchMemberById: (soundId: number) => dispatch(fetchMemberById(soundId)),
  fetchReceiveRequest: (soundId: string) =>
    dispatch(fetchReceiveRequest(soundId)),
  onSave: (transaction: TransactionEntity) =>
    dispatch(saveTransactionAction(transaction))
});

export const SoundPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SoundActivity);
