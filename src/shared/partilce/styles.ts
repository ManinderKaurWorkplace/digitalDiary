import {createStyles, Theme} from '@material-ui/core/styles';

export const ParticlesComponentStyle = (theme: Theme) => createStyles({
  root: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: 'black'
  },
  particle:{
  }
});

export type ParticlesComponentStyle = typeof ParticlesComponentStyle;


