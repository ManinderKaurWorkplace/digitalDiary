
export interface UserDetailTypes {
  name: string;
  password: string;
  // name1?: any;
  // name2?: any;
}

export const SET_USER = 'set_user';

export interface SetUserAction {
  type: typeof SET_USER,
  payload: UserDetailTypes,
}

export type UserActionType = SetUserAction;