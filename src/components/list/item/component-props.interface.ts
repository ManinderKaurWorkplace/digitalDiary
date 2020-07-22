/**
 * To define prop-types for ListItemComponent.
 */
export interface ListItemComponentPropsTypes {
  /**
   * id: Id of item;
   */
  id: string;
  /**
   * title: Contains title of note.
   */
  title: string;
  /**
   * timeStamp: Contains time when note was last accessed.
   */
  timeStamp: string;
  /**
  * selectedId: Id of selected note item
  */
  selectedId: string;
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