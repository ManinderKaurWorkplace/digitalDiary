import Fab from '@material-ui/core/Fab';
import { WithStyles  } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import classnames from 'classnames';
import React, { Component, ReactNode } from 'react';
import { ListItemComponentPropsTypes } from './component-props.interface';
import { ListItemComponentStyle } from './styles'

export class ListItemComponent extends Component<ListItemComponentPropsTypes & WithStyles<ListItemComponentStyle>> {
  constructor(props: any) {
    super(props);
    this.onEdit = this.onEdit.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  private onEdit() {
    this.props.onEdit(this.props.id);
  }

  private onDelete() {
    this.props.onDelete(this.props.id);
  }

  public render(): ReactNode{
    const { id, title, timeStamp, classes, onShow, selectedId } = this.props;
    return (
      <div  className={classes.noteItemWrapper}
      key={id} 
      id={`${id}`} 
      >
        <div 
          id={`${id}`} 
          className={classes.noteItem}
          onClick={onShow}              
          >
            <p className={classes.noteItemTitle}>{title}</p>
            <p className={classes.noteItemDate}>{timeStamp}</p>
        </div>
        <div id='noteItemActions'  className={classnames(classes.noteItemActions, { active: selectedId === `${id}` })}>
        <Fab size={'small'} color="secondary" aria-label="edit" className={classes.closeIcon} onClick={this.onEdit}>
          <EditIcon />
        </Fab>
        <Fab size={'small'} color="secondary" aria-label="delete" className={classes.closeIcon} onClick={this.onDelete}>
          <DeleteIcon />
        </Fab>
      </div>    
      </div>
    );
  }
} 

// = ({
//   id, title, timeStamp, classes, onShow, onEdit, selectedId
// }) => {
//  return (
//     <div  className={classes.noteItemWrapper}
//     key={id} 
//     id={`${id}`} 
//     >
//       <div 
//         id={`${id}`} 
//         className={classes.noteItem}
//         onClick={onShow}              
//         >
//           <p className={classes.noteItemTitle}>{title}</p>
//           <p className={classes.noteItemDate}>{timeStamp}</p>
//       </div>
//       <div id='noteItemActions'  className={classnames(classes.noteItemActions, { active: selectedId === `${id}` })}>
//         <Fab size={'small'} color="secondary" aria-label="edit" className={classes.closeIcon} onClick={onEdit}>
//           <EditIcon />
//         </Fab>
//         <Fab size={'small'} color="secondary" aria-label="delete" className={classes.closeIcon} >
//           <DeleteIcon />
//         </Fab>
//       </div>    
//     </div>
//  );
// }