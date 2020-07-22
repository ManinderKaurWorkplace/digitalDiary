
/**
 * NoteItemTypes: Interface to define type note item.
 */
export interface NoteItemTypes {
  /**
   * title: Contains title of note.
   */
  title: string;
  /**
   * message: Contains content of note.
   */
  message: string;
  /**
   * timeStamp: Contains time when note was last accessed.
   */
  timeStamp: number;
}

/**
 * NotesDataType: To define type of Notes data.
 */
export type NotesDataType = Record<string, NoteItemTypes>;

/**
 * NoteDataTypeInterface: Config for note iten
 */
export interface NoteDataTypeInterface {
  id: string,
  note: NoteItemTypes,
}

/**
 * NotesTypes: To define state of Notes.
 */
export interface NotesTypes {
  notes: NotesDataType;
}

/**
 * DeleteNotePayloadTypes: Payload for deleting some note item.
 */
export interface DeleteNotePayloadTypes {
  id: string;
}

/**
 * ADD_NOTE: Action type for adding new note.
 */
export const ADD_NOTE = 'add_note';
/**
 * EDIT_NOTE: Action type for updating existing note.
 */
export const EDIT_NOTE = 'edit_note';
/**
 * DELETE_NOTE: Action type for deleting existing note.
 */
export const DELETE_NOTE = 'delete_note';

/**
 * AddNoteAction : Interface to add new note.
 */
export interface AddNoteAction {
  type: typeof ADD_NOTE,
  payload: NotesDataType,
}

/**
 * EditNoteAction : Interface to update existing note.
 */
export interface EditNoteAction {
  type: typeof EDIT_NOTE,
  payload: NoteDataTypeInterface,
}

/**
 * DeleteNoteAction : Interface to delete existing note.
 */
export interface DeleteNoteAction {
  type: typeof DELETE_NOTE,
  payload: string,
}

/**
 * NotesActionType: To define type of actions supported on Notes reducer. 
 */
export type NotesActionType = AddNoteAction | EditNoteAction | DeleteNoteAction;