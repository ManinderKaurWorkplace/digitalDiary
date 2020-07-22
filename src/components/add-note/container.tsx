import { withStyles } from '@material-ui/core/styles';
import  AddNoteComponent from './component';
import {  AddNoteComponentStyle } from './styles';

export const AddNoteContainer = withStyles(AddNoteComponentStyle)(AddNoteComponent);