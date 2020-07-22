import { withStyles } from '@material-ui/core/styles';
import { ParticlesComponent } from './component';
import { ParticlesComponentStyle } from './styles';

export const ParticlesContainer = withStyles(ParticlesComponentStyle)(ParticlesComponent);