import { SET_USER, UserDetailTypes } from './types';

export const setUser = (payload: UserDetailTypes) => {
  return {
    type: SET_USER,
    payload
  }
}

