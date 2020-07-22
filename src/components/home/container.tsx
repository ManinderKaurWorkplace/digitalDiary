import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import HomeComponent from './component';
import { HomeComponentStyle } from './styles';
import { AppState } from '../../redux/store/component';
import { addNote, deleteNote, editNote } from '../../redux/notes/actions';
import { NotesDataType, NoteDataTypeInterface } from '../../redux/notes/types';

const mapStateToProps = (state: AppState) => {
  return {
    user: state.userDetails,
    notes: state.notesState.notes,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    addNewNote: (payload: NotesDataType) => dispatch(addNote(payload)),
    editNewNote: (payload: NoteDataTypeInterface) => dispatch(editNote(payload)),
    deleteNewNote: (payload: string) => dispatch(deleteNote(payload))
  }
}

/**
 * Container for HomeComponent.
 */
export const HomeContainer = 
withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(HomeComponentStyle)(HomeComponent)));