import { UserDetailTypes } from '../../redux/user-detail/types';
import { NotesDataType, NoteDataTypeInterface } from '../../redux/notes/types';

/**
 * To define prop-types for HomeComponent.
 */
export interface HomeComponentPropsTypes {
  /**
   * user: Contains user's detail.
   */
  user: UserDetailTypes;
  /**
   * notes: Contains list of notes added by user.
   */
  notes: NotesDataType;
  /**
   * addNewNote: Callback to save new note in reducer.
   * 
   * @param payload : New note.
   * @returns void
   */
  addNewNote: (payload: NotesDataType) => void;
  /**
   * editNewNote: Callback to edit note in reducer.
   * 
   * @param payload : Edited note.
   * @returns void
   */
  editNewNote: (payload: NoteDataTypeInterface) => void;
  /**
   * deleteNewNote: Callback to delete note in reducer.
   * 
   * @param payload : Id of note to be deleted.
   * @returns void
   */
  deleteNewNote: (payload: string) => void;  
}