import { SoundEntity, MemberEntity } from "../../model";
import { members } from "../../api/member/mockData";
import { sound } from "./mockData";
let mockMembers = members;
let mockSound = sound;
const userURL = "https://api.github.com/user";

const fetchMemberIdBySoundId = (soundId: number): Promise<SoundEntity> => {
  const sound = mockSound.find(m => m.id === soundId);
  return Promise.resolve(sound);
};

const fetchMemberIdBySoundIdAsync = (soundId: number): Promise<number> => {
  const soundURL = `${userURL}/${soundId}`;
  return fetch(soundURL)
    .then(response => response.json())
    .then(mapSendSoundToSound);
};

const mapSendSoundToSound = (githubMember): number => {
  return githubMember.id;
};

const fetchMemberByMemberId = (id: number): Promise<MemberEntity> => {
  const member = mockMembers.find(m => m.id === id);

  return Promise.resolve(member);
};

const fetchMemberByMemberIdAsync = (id: number): Promise<MemberEntity> => {
  const membersURL = `${userURL}/${id}`;
  return fetch(membersURL)
    .then(response => response.json())
    .then(mapToMember);
};

const mapToMember = (githubMember): MemberEntity => {
  return {
    id: githubMember.id,
    login: githubMember.login,
    avatar_url: githubMember.avatar_url
  };
};

const receiveSoundIdByMemberId = (memberId: number): Promise<SoundEntity> => {
  const sound = mockSound.find(m => m.member_id === memberId);
  return Promise.resolve(sound);
};

const receiveSoundByMemberIdAsync = (soundId: string): Promise<SoundEntity> => {
  const soundURL = `${userURL}/${soundId}`;
  return fetch(soundURL)
    .then(response => response.json())
    .then(mapReceiveSoundToSound);
};

const mapReceiveSoundToSound = (githubMember): SoundEntity => {
  return {
    id: githubMember.id,
    sound_status: githubMember.login,
    sound_url: githubMember.avatar_url,
    sound_time: githubMember.created_at,
    member_id: githubMember.followers
  };
};

export const soundAPI = {
  fetchMemberByMemberId,
  fetchMemberByMemberIdAsync,
  receiveSoundIdByMemberId,
  receiveSoundByMemberIdAsync,
  fetchMemberIdBySoundId,
  fetchMemberIdBySoundIdAsync
};
