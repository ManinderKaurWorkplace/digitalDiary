import {  NoteItemTypes } from '../../redux/notes/types';

export const isSaveDisabled = (note: NoteItemTypes) => {
  return !(note.title && note.message);
}