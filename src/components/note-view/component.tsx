import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import { WithStyles  } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import React, { FunctionComponent } from 'react';
import { NoteViewComponentPropsTypes } from './component-props.interface';
import { NoteViewComponentStyle } from './styles'

export const NoteViewComponent: FunctionComponent<NoteViewComponentPropsTypes & WithStyles<NoteViewComponentStyle>> = ({
  note, classes, onClose
}) => {
 const date = `${new Date(note.timeStamp)}`;
 return (
  <div className={classes.noteDetailWarpper}>
    <div className={classes.noteDetailSubWarpper}>
    <Typography className={classes.detailTitle}>{note.title}</Typography>
    <Fab size={'small'} color="secondary" aria-label="add" className={classes.closeIcon} onClick={onClose}>
      <CloseIcon />
    </Fab>
    </div>
    <Typography className={classes.detailTime}>{date}</Typography>
    <Typography className={classes.datailMessage}>{note.message}</Typography>
  </div>
  )
}