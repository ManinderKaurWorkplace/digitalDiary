import {createStyles, Theme} from '@material-ui/core/styles';

export const LayoutComponentStyle = (theme: Theme) => createStyles({
  wrapper: {
    position: "relative",
    width: "100%",
    height: "100vh",
    background:'#52664b',
    color: 'white', 
    fontFamily: 'monospace',
    fontSize: 'large',
    textAlign: 'center',
  },
});

export type LayoutComponentStyle = typeof LayoutComponentStyle;


