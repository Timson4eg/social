export interface IUser {
  id: number;
  name: string;
  job: string;
  status: string;
  img: string;
}

// ----enum

export enum EnumTypeProfile {
  DESCRIPTION,
  JOB,
  CHAT,
}

export enum EnumAvatar {
  STORIES,
  PROFILE,
}
