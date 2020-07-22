import { combineReducers } from 'redux';
import { userDetailReducer } from '../user-detail/reducer';
import { notesReducer } from '../notes/reducer';

export const rootReducer = combineReducers({
  userDetails: userDetailReducer,
  notesState: notesReducer
});

export type AppState = ReturnType<typeof rootReducer>;