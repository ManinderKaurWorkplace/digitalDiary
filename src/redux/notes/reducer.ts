import { initialState } from './state';
import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE, NotesTypes, NotesActionType } from './types';

export const notesReducer = (state = initialState, action: NotesActionType): NotesTypes => {
  switch(action.type){
    case ADD_NOTE:
      return Object.assign({}, state, {
        notes : action.payload
      });
    case EDIT_NOTE:
      {
        const { notes } = state;
        notes[action.payload.id] = action.payload.note;
        return Object.assign({}, state,{
          notes,
        });
      }
    case DELETE_NOTE:
      const notes = state.notes;
      delete notes[action.payload];
      return Object.assign({}, state,{
        notes,
      });
    default: return state;
  }
}