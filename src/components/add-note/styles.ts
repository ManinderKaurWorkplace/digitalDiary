import {createStyles, Theme} from '@material-ui/core/styles';

export const AddNoteComponentStyle = (theme: Theme) => createStyles({
  root:{
    background: 'green'
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    margin: 12,
    '& div': {
      paddingBottom: 25,
    }
  },
  msg: {
    '& div > textarea':{
      'max-height': '150px',
      overflow: 'auto !important',
      minHeight: '100px !important',
    }

  }
});

export type AddNoteComponentStyle = typeof AddNoteComponentStyle;


