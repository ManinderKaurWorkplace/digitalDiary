import { withStyles } from '@material-ui/core/styles';
import { ListComponent } from './component';
import { ListComponentStyle } from './styles';

/**
 * Container for ListComponent.
 */
export const ListContainer = 
  withStyles(ListComponentStyle)(ListComponent);