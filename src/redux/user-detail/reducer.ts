import { initialState } from './state';
import { SET_USER, UserDetailTypes, UserActionType } from './types';

export const userDetailReducer = (state = initialState, action: UserActionType): UserDetailTypes => {
  switch(action.type){
    case SET_USER: 
    return Object.assign({}, state,{
      ...action.payload
    })
    default: return state;
  }
}