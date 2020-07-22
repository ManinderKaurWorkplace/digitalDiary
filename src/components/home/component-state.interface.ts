import { NotesDataType, NoteItemTypes } from '../../redux/notes/types';

/**
 * To define state-types for HomeComponent.
 */
export interface HomeComponentStateInterface {
  /**
   * notes: To define list of notes.
   */
  notes: NotesDataType,
  /**
   * isAddNoteView: To display add-note view. By default false.
   */
  isAddNoteView: boolean;
  /**
   * note: State of new added note.
   */
  note: NoteItemTypes;
  /**
   * isShowFullNote: Boolean value to show detail of selected note.
   */
  isShowFullNote: boolean;
  /**
   * charCount: Contains length of message characters.
   */
  charCount: number;
  /**
   * selectedItemId: Id of selected note item
   */
  selectedItemId: string;
  /**
   * isEdit: To display edit-note view. By default false.
   */
  isEdit: boolean;
}