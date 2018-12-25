import { actionTypes } from "../../../common/constants/actionTypes";
import { SoundEntity } from "../../../model";
import { soundAPI } from "../../../api/sound";
import { trackPromise } from "react-promise-tracker";

export const fetchReceiveRequest = (sound_id: string) => dispatch => {
  trackPromise(
    soundAPI.receiveSoundByMemberIdAsync(sound_id).then(sound => {
      dispatch(fetchSoundCompleted(sound));
    })
  );
};

const fetchSoundCompleted = (sound: SoundEntity) => ({
  type: actionTypes.RECEIVE_SOUND_COMPLETED,
  payload: sound
});
