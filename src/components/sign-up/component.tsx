import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { WithStyles  } from '@material-ui/core/styles';
import React, { Component, ReactNode } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { SignUpComponentPropsInterface } from './component-props.interface';
import { SignUpComponentStateInterface } from './component-state.interface';
import { SignUpComponentStyle } from './styles';
import { LayoutContainer } from '../layout/container';
import { Link } from '@material-ui/core';

/**
 * SignUp Screen component.
 */
export class SignUpComponent extends Component<SignUpComponentPropsInterface & RouteComponentProps & WithStyles<SignUpComponentStyle>, SignUpComponentStateInterface> {
  constructor(props: any){
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    }
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSignUp = this.handleOnSignUp.bind(this);
  }

  
  handleOnChange(event: any){
    this.setState({
      [event.target.id]: event.target.value
    } as Pick<SignUpComponentStateInterface, keyof SignUpComponentStateInterface>);
  }

  handleOnSignUp(){
    const { username, password } = this.state;
    if(username && password && username === 'test' && password === 'test'){
      const { history, setUserAction} = this.props;
      // setUserAction({
      //   name: username,

      // });
      history.push('/home' , { name: username });
    }
  }

 public render(): ReactNode {
   const { classes } = this.props;
   const { username, password, email } = this.state;
    return (
      <LayoutContainer>
          <div className={classes.root}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <TextField id='username' label={'Username'} className={classes.textField} value={username} onChange={this.handleOnChange}/>
              <TextField id='email' type={'email'} label={'Email'} className={classes.textField} value={email} onChange={this.handleOnChange}/>
              <TextField id='password' type={'password'} label={'Password'} className={classes.textField} value={password} onChange={this.handleOnChange}/>
              <Button variant="outlined" size="small" className={classes.button} onClick={this.handleOnSignUp}>SignUp</Button>
              <Link href={'/'} className={classes.link}>Have account? Login</Link>
            </CardContent>
          </Card>
        </div>
      </LayoutContainer>
    )
  }
}

export default SignUpComponent;



