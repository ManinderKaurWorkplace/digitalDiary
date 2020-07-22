import { withStyles } from '@material-ui/core/styles';
import {LayoutComponent} from './component';
import { LayoutComponentStyle } from './styles';

export const LayoutContainer = withStyles(LayoutComponentStyle)(LayoutComponent);