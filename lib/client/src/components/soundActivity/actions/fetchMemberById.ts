import { actionTypes } from "../../../common/constants/actionTypes";
import { SoundEntity, MemberEntity } from "../../../model";
import { soundAPI } from "../../../api/sound";
import { trackPromise } from "react-promise-tracker";

export const fetchMemberById = (soundId: number) => dispatch => {
  trackPromise(
    soundAPI.fetchMemberIdBySoundIdAsync(soundId).then(memberId => {
      soundAPI.fetchMemberByMemberIdAsync(memberId).then(member => {
        dispatch(fetchSoundCompleted(member));
      });
    })
  );
};

const fetchSoundCompleted = (member: MemberEntity) => ({
  type: actionTypes.SEND_SOUND_COMPLETED,
  payload: member
});
