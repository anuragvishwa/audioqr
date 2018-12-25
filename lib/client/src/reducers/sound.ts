import { actionTypes } from "../common/constants/actionTypes";
import { SoundEntity, MemberEntity } from "../model";

const createEmptySound = (): SoundEntity => ({
  member_id: null,
  sound_status: null,
  sound_time: null,
  id: null,
  sound_url: null
});

const createEmptyMember = (): MemberEntity => ({
  id: -1,
  login: "",
  avatar_url: ""
});

export const soundReducer = (
  state: MemberEntity = createEmptyMember(),
  action
) => {
  switch (action.type) {
    case actionTypes.SEND_SOUND_COMPLETED:
      return sendSoundCompleted(state, action.payload);

    case actionTypes.RECEIVE_SOUND_COMPLETED:
  }
  return state;
};

const sendSoundCompleted = (
  state: MemberEntity = createEmptyMember(),
  payload: MemberEntity = createEmptyMember()
): MemberEntity => {
  return payload;
};

const receiveSoundCompleted = (
  state: SoundEntity = createEmptySound(),
  payload: SoundEntity = createEmptySound()
): SoundEntity => {
  return payload;
};
