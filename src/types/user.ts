import { IUser } from "../components/types/types";

export interface UserState {
  users: IUser[];
  loading: boolean;
  error: null | string;
}

export interface IUserChat extends IUser {
  lastMessage: string;
}

export enum UserActionTypes {
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
}

interface FetchUsersAction {
  type: UserActionTypes.FETCH_USERS;
}
interface FetchUsersErrorAction {
  type: UserActionTypes.FETCH_USERS_ERROR;
  payload: string;
}
interface FetchUsersSuccessAction {
  type: UserActionTypes.FETCH_USERS_SUCCESS;
  payload: any[];
}
export type UserAction =
  | FetchUsersAction
  | FetchUsersErrorAction
  | FetchUsersSuccessAction;
