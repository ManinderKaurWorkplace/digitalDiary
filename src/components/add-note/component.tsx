import { WithStyles  } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import React, { Component, ReactNode } from 'react';

import { AddNoteComponentPropsTypes } from './component-props.interface';
import { MAX_CHAR_ALLOWED } from './constants';
import { AddNoteComponentStyle } from './styles';

/**
 * Add Note Screen component
 */
export class AddNoteComponent extends Component<AddNoteComponentPropsTypes & WithStyles<AddNoteComponentStyle>> {
  constructor(props: any){
    super(props);
    this.onChange = this.onChange.bind(this);

  }

  onChange(event: any){
    this.props.onChange(event.target.id, event.target.value);
  }

 public render(): ReactNode{
   const { title, message, charCount, classes } = this.props;
    return (
          <Card>
            <CardContent className={classes.cardContent}>
              <TextField id='title' placeholder={'Title'} value={title} onChange={this.onChange}/>
              <TextField id='message' placeholder={'Type here..'} value={message} onChange={this.onChange} multiline className={classes.msg}/>
              <p>{charCount}/{MAX_CHAR_ALLOWED}</p>
            </CardContent>
          </Card>
    )
  }
}

export default AddNoteComponent;