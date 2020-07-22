import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { WithStyles  } from '@material-ui/core/styles';
import React, { Component, ReactNode } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Link } from '@material-ui/core';
import { LoginComponentPropsInterface } from './component-props.interface';
import { LoginComponentStateInterface } from './component-state.interface';
import { LoginComponentStyle } from './styles';
import { LayoutContainer } from '../layout/container';

/**
 * Login Screen component.
 */
export class LoginComponent extends Component<LoginComponentPropsInterface & RouteComponentProps & WithStyles<LoginComponentStyle>, LoginComponentStateInterface> {
  constructor(props: any){
    super(props);
    this.state = {
      username: '',
      password: '',
    }
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnLogin = this.handleOnLogin.bind(this);
  }

  
  handleOnChange(event: any){
    this.setState({
      [event.target.id]: event.target.value
    } as Pick<LoginComponentStateInterface, keyof LoginComponentStateInterface>);
  }

  isValid(username: string, password: string){
    if(!username){
      alert('Username required!!!');
      return false;
    } else if(!password){
      alert('Password required!!!');
      return false;
    } else if(password.length < 6){
      alert('Password must be 6 characters long!!!');
      return false;
    }

    return true;
  }

  handleOnLogin(){
    const { username, password } = this.state;
    if(!this.isValid(username, password)){
       return;
    }
    const { history, setUserAction} = this.props;
    history.push('/home' , {name: username});

    // if(username && password){
    //   const { history, setUserAction} = this.props;
    //   // setUserAction({
    //   //   name: username
    //   // });
    //   history.push('/home' , {name: username});
    // }
  }

 public render(): ReactNode {
   const { classes } = this.props;
   const { username, password } = this.state;
    return (
      <LayoutContainer>
          <div className={classes.root}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <TextField id='username' label={'Username'} className={classes.textField} value={username} onChange={this.handleOnChange}/>
              <TextField id='password' type={'password'} label={'Password'} className={classes.textField} value={password} onChange={this.handleOnChange}/>
              <Button variant="outlined" size="small" className={classes.button} onClick={this.handleOnLogin}>Login</Button>
              <Link href={'/sign-up'}>Don't have account? Create one</Link>
            </CardContent>
          </Card>
        </div>
      </LayoutContainer>
    )
  }
}

export default LoginComponent;



