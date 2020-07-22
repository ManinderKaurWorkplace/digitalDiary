import {createStyles, Theme} from '@material-ui/core/styles';

/**
 * Component to create styles for NoteViewComponent.
 * @param theme : Contains theme props.
 */
export const NoteViewComponentStyle = (theme: Theme) => createStyles({
  closeIcon: {
    margin: theme.spacing(1),
    background:'green',
  },
  noteDetailWarpper:{

  },
  noteDetailSubWarpper:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailTitle:{
    textTransform: 'uppercase',
    fontStyle: 'italic',
    fontFamily: 'monospace',
    color: '#2400ff',
    fontWeight: 'bold',
    textAlign: 'left',
    paddingLeft: 10,
    fontSize: '20px'
  },
  detailTime:{
    color: '#9d98be',
    fontStyle: 'italic',
    textAlign: 'left',
    fontFamily: 'monospace',
    fontWeight: 'bold',
    fontSize: '15px',
    paddingLeft: 10
  },
  datailMessage:{
    height: '300px',
    overflow: 'auto',
    padding: 10,
    marginBottom: 10,
    textAlign: 'justify',
    background: 'lightseagreen',
  },   
});

/**
 * type NoteViewComponentStyle : To define type of style for NoteViewComponent.
 */
export type NoteViewComponentStyle = typeof NoteViewComponentStyle;


