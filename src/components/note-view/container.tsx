import { withStyles } from '@material-ui/core/styles';
import { NoteViewComponent } from './component';
import { NoteViewComponentStyle } from './styles';

/**
 * Container for NoteViewComponent.
 */
export const NoteViewContainer = 
  withStyles(NoteViewComponentStyle)(NoteViewComponent);