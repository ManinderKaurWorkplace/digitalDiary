import { NotesDataType } from '../../redux/notes/types';

/**
 * To define prop-types for ListComponent.
 */
export interface ListComponentPropsTypes {
  /**
   * notes: To define list of notes.
   */
  items: NotesDataType,
  /**
  * selectedItemId: Id of selected note item
  */
  selectedItemId: string
  /**
   * onShow: To show note view.
   */
  onShow: (event: any) => void;
  /**
   * onEdit: To edit note view.
   */
  onEdit: (id: string) => void;
   /**
   * onDelete: To delete note view.
   */
  onDelete: (id: string) => void;
  

}