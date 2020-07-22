import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import DoneIcon from '@material-ui/icons/Done';
import { WithStyles  } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import React, { Component, ReactNode } from 'react';
import { RouteComponentProps} from 'react-router-dom';

import { HomeComponentPropsTypes } from './component-props.interface';
import { HomeComponentStateInterface } from './component-state.interface';
import { HomeComponentStyle } from './styles';
import { LayoutContainer } from '../layout/container';
import { AddNoteContainer } from '../add-note/container';
import { NotesDataType, NoteItemTypes } from '../../redux/notes/types';
import { isSaveDisabled } from './utils';
import { NoteViewContainer } from '../note-view/container';
import { ListContainer } from '../list/container';

/**
 * Home Screen component.
 */
export class HomeComponent extends Component<HomeComponentPropsTypes & WithStyles<HomeComponentStyle> & RouteComponentProps, HomeComponentStateInterface> {
 
  constructor(props:any){
  super(props);
  this.state = {
    notes: this.props.notes,
    isAddNoteView: false,
    note: {
      title: '',
      message: '',
      timeStamp: 0,
    },
    isShowFullNote: false,
    charCount: 0,
    selectedItemId: '',
    isEdit: false
  }

  this.handleToggleAddNoteView = this.handleToggleAddNoteView.bind(this);
  this.handleCloseAddNoteView = this.handleCloseAddNoteView.bind(this);
  this.handleSaveNote = this.handleSaveNote.bind(this);
  this.handleOnChangeNote = this.handleOnChangeNote.bind(this);
  this.onShowFullNote = this.onShowFullNote.bind(this);
  this.onCloseFullNote = this.onCloseFullNote.bind(this);
  this.onEditNote = this.onEditNote.bind(this);
  this.onDeleteNote = this.onDeleteNote.bind(this);
 }

  private handleToggleAddNoteView(){
    this.setState({
      isAddNoteView: !this.state.isAddNoteView,
    });
  }

  private handleCloseAddNoteView(){
    this.setState({
      isAddNoteView: false,
    });
  }

  private handleSaveNote() {
    const { addNewNote, editNewNote } = this.props;
    let { notes, note, isEdit, selectedItemId } = this.state;

    if (isEdit) {
      notes[selectedItemId] = note;
      editNewNote({
        id: selectedItemId,
        note: {...note, timeStamp: new Date().getTime()}
      });
    } else {
      const key = Math.random().toString();
      const newNoteItem: NotesDataType = {[key]: {...note, timeStamp: new Date().getTime()}};
      notes = {
        ...notes,
        ...newNoteItem,
      }
      addNewNote(newNoteItem);
    }   

    this.setState({
      notes,
      note: {
        title: '',
        message: '',
        timeStamp: 0,
      },
      isEdit: false,
      selectedItemId: ''
    })
    this.handleCloseAddNoteView();
  }

  private handleOnChangeNote(id: keyof NoteItemTypes, value: string) {
    if(id === 'message') {
    const charCount = value.length;
    if(value.length > 50){
      return;
    }
    this.setState({
      charCount,
    });
    }
    let newNote = {...this.state.note, [id]: value };
    this.setState({
      note: newNote,
    });
  }

  private onShowFullNote(event: any){
    const id = event.target.id;
    this.setState({
      isShowFullNote: true,
      note: this.state.notes[id],
    });
  }

  private onCloseFullNote(){
    this.setState({
      isShowFullNote: false,
      note: {
        title: '',
        message: '',
        timeStamp: 0,
      }
    });
  }

  private onEditNote(id: string){
    this.setState({
      isEdit: true,
      isAddNoteView: true,
      note: this.state.notes[id],
      selectedItemId: id
    });
  }

  private onDeleteNote(id: string){
    const { notes } = this.state;
    delete notes[id];
    this.setState({
      notes
    });
    this.props.deleteNewNote(id);
  }


  private renderAddNoteView(): ReactNode{
    if(!this.state.isAddNoteView){
    return null;
    }
    const { note: {title, message} , charCount} = this.state;
    return <AddNoteContainer title={title} message={message} onChange={this.handleOnChangeNote} charCount={charCount}/>
  }

  private renderNoteList(): ReactNode{
    if(this.state.isAddNoteView){
      return null;
    }
    const { notes, isShowFullNote, selectedItemId, note } = this.state;
    if(isShowFullNote){
      return  <NoteViewContainer note={note} onClose={this.onCloseFullNote}/>   
    }

    return <ListContainer 
            items={notes} 
            selectedItemId={selectedItemId}
            onShow={this.onShowFullNote} 
            onEdit={this.onEditNote}
            onDelete={this.onDeleteNote}
          />  
  }

  private renderButtonView(): ReactNode{
    const { classes } = this.props;
    const { isAddNoteView, note, isShowFullNote } = this.state;

    if(!isAddNoteView){
      return (
        <Fab color="secondary" aria-label="add" disabled={isShowFullNote} className={classes.addIcon} onClick={this.handleToggleAddNoteView}>
          <AddIcon/>
        </Fab>
      );
    }
    return (<>
      <Fab aria-label="add" className={classes.doneIcon} onClick={this.handleSaveNote} disabled={isSaveDisabled(note)}>
          <DoneIcon />
        </Fab>
        <Fab color="secondary" aria-label="add" className={classes.closeIcon} onClick={this.handleCloseAddNoteView}>
          <CloseIcon />
        </Fab>
    </>)
  }

  public render(): ReactNode{
    const {  classes} = this.props;
    console.log(' this.props : ', this.props)
    return (
      <LayoutContainer >
          <p className={classes.title}>Hello { 'Test User1' }, Welcome to digitalDiary's World</p>
            {this.renderButtonView()}
            <div className={classes.root}>
            <Grid item xs={10} className={classes.container}>
              <Paper className={classes.paper}>
                {this.renderAddNoteView()}
                {this.renderNoteList()}
              </Paper>
            </Grid>
            </div>

      </LayoutContainer>
    )
  }
}

export default HomeComponent;