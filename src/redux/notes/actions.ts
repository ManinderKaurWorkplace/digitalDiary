import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE, NotesDataType, NoteDataTypeInterface } from './types';

export const addNote = (payload: NotesDataType) => {
  return {
    type: ADD_NOTE,
    payload
  }
}

export const editNote = (payload: NoteDataTypeInterface) => {
  return {
    type: EDIT_NOTE,
    payload
  }
}

export const deleteNote = (payload: string) => {
  return {
    type: DELETE_NOTE,
    payload
  }
}

