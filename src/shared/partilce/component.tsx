import { WithStyles  } from '@material-ui/core/styles';
import React, { FunctionComponent } from "react";
import Particles from "react-particles-js";
import { particleConfigOptions } from '../../assets/particle-config';
import { ParticlesComponentStyle } from './styles';

export const ParticlesComponent: FunctionComponent<WithStyles<ParticlesComponentStyle>> = (props) => (
  <div className={props.classes.root}>
    <Particles  className={props.classes.particle}/>

  </div>
);
