import { NoteItemTypes } from '../../redux/notes/types';
/**
 * To define prop-types for AddNoteComponent.
 */
export interface AddNoteComponentPropsTypes {
  /**
   * title: Contains title of note.
   */
  title: string;
  /**
   * message: Contains content of note.
   */
  message: string;
  /**
   * charCount: Contains length of message characters.
   */
  charCount: number;
  /**
   * onChange: Callback to add content to new note.
   * 
   * @param id: keyof NoteItemTypes.
   * @param value: string
   * 
   * @returns void
   */
  onChange: (id: keyof NoteItemTypes, value: string) => void;
}