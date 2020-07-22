import { withStyles } from '@material-ui/core/styles';
import { ListItemComponent } from './component';
import { ListItemComponentStyle } from './styles';

/**
 * Container for ListItemComponent.
 */
export const ListItemContainer = 
  withStyles(ListItemComponentStyle)(ListItemComponent);