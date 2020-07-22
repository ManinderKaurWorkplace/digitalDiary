import {createStyles, Theme} from '@material-ui/core/styles';
import wall from '../../assets/images/guestView.jpg';

/**
 * Component to create styles for SignUpComponent.
 * @param theme : Contains theme props.
 */
export const SignUpComponentStyle = (theme: Theme) => createStyles({
  root:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'inherit',
  },
  card: {
    height: 400,
    minWidth: 300,
    width: 800,
    background: `url(${wall})`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  cardContent: {
    width: 360,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  textField: {
    fontSize: 14,
    margin: '10px',
    display: 'flex',   

    '& label':{
      fontFamily: 'monospace',
      fontWeight: 600,
    },
    '& div > input':{
      fontFamily: 'monospace',
      fontWeight: 600,
    }
  },
  pos: {
    marginBottom: 12,
  },
  button:{
    marginTop: 30,
    fontWeight: 600,
    background: '#6c8b5d',
    width: '-webkit-fill-available'
  },
  link: {

  }
});

/**
 * type SignUpComponentStyle : To define type of style for SignUpComponent.
 */
export type SignUpComponentStyle = typeof SignUpComponentStyle;


