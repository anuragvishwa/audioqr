import { connect } from "react-redux";
import { State } from "../../reducers";
import { SoundEntity } from "../../model";
import { fetchReceiveRequest } from "./actions/fetchReceiveRequest";
import { fetchMemberById } from "./actions/fetchMemberById";
import { SoundActivity } from "./page";

const mapStateToProps = (state: State, ownProps: any) => ({
  sound: state.sound_activity,
  member: state.sound_activity,
  soundId: Number(ownProps.match.params.id) || 0
});

const mapDispatchToProps = dispatch => ({
  fetchMemberById: (soundId: number) => dispatch(fetchMemberById(soundId)),
  fetchReceiveRequest: (soundId: string) =>
    dispatch(fetchReceiveRequest(soundId))
});

export const SoundPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SoundActivity);
