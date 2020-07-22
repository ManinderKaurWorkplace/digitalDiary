import {createStyles, Theme} from '@material-ui/core/styles';

/**
 * Component to create styles for ListItemComponent.
 * @param theme : Contains theme props.
 */
export const ListItemComponentStyle = (theme: Theme) => createStyles({
  noteItemWrapper:{
    display: 'flex',
    justifyContent: 'space-between',
    '&:hover':{
      '& div#noteItemActions':{
        display: 'inline-block',
      }
    },    
    '&:not(:hover)':{
      '& div#noteItemActions':{
        display: 'none',
      }
    }
  },
  noteItem:{
    position: 'relative',
    background: 'aquamarine',
    border: 'solid 1px green',
    display: 'flex',
    flex: 3,
    justifyContent: 'space-between',
    padding: '0 15px',
    cursor: 'pointer',
    '&::before':{
      content:`""`,
      position: 'absolute',
      height: '100%',
      width: '100%',
      top: 0,
      left: 0,
      zIndex: 1
    },
    '& > p':{
      color: 'blue',
    }
  }, 
  noteItemTitle:{
    color: 'red'
  },
  noteItemDate:{
    color: 'red'
  },
  noteItemActions:{
    // display: 'none',
    // '&.active':{
    //   display: 'inline-block',
    // },
  },
  closeIcon: {
    margin: theme.spacing(1),
    background:'green',
  },

});

/**
 * type ListItemComponentStyle : To define type of style for ListItemComponent.
 */
export type ListItemComponentStyle = typeof ListItemComponentStyle;


