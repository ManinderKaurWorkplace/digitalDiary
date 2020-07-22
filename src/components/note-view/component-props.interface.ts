import { NoteItemTypes } from '../../redux/notes/types';

/**
 * To define prop-types for NoteViewComponent.
 */
export interface NoteViewComponentPropsTypes {
   /**
   * note: State of new added note.
   */
  note: NoteItemTypes;
  /**
   * onClose: To close note view.
   */
  onClose: () => void;
}