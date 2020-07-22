import {createStyles, Theme} from '@material-ui/core/styles';
import wall from '../../assets/images/homeView.jpg'

/**
 * Component to create styles for HomeComponent.
 * @param theme : Contains theme props.
 */
export const HomeComponentStyle = (theme: Theme) => createStyles({
  root:{
    background: `url(${wall})`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '20px 200px',
    backgroundPosition: 'center',
    backgroundAttachment: 'scroll',
    backgroundSize: 'cover',
    overflow: 'auto'
  },
  title:{
    marginTop: 0
  },
  addIcon: {
    margin: theme.spacing(1)
  },
  doneIcon: {
    margin: theme.spacing(1),
    background: 'green'
  },
  closeIcon: {
    margin: theme.spacing(1),
    background:'green',
  },
  container:{
    height: 600,
    minWidth: 300,
    width: 800,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper:{
    width: 500,
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
 * type HomeComponentStyle : To define type of style for HomeComponent.
 */
export type HomeComponentStyle = typeof HomeComponentStyle;


