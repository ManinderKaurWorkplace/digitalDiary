import { WithStyles  } from '@material-ui/core/styles';
import React, { FunctionComponent } from 'react';
import { ListComponentPropsTypes } from './component-props.interface';
import { ListComponentStyle } from './styles'
import { ListItemContainer } from './item/container';

export const ListComponent: FunctionComponent<ListComponentPropsTypes 
  & WithStyles<ListComponentStyle>> = ({
  items, onShow, onEdit, selectedItemId, onDelete
}) => {
 return <>
    {Object.keys(items).map(noteId => (
      <ListItemContainer
        key={noteId} 
        id={noteId}
        title={items[noteId].title}
        timeStamp={`${new Date(items[noteId].timeStamp).toDateString()}`}
        selectedId={selectedItemId}
        onShow={onShow}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    ))} 
  </>
}