import React,{ FunctionComponent } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { AddNoteContainer } from '../components/add-note/container';
import { HomeContainer } from '../components/home/container';
import { LoginContainer } from '../components/login/container';
import { SignUpContainer } from '../components/sign-up/container';

export const Routes: FunctionComponent = () => (
  <BrowserRouter>
    <Switch>
      {/* <Route exact path="/add-note" component={AddNoteContainer}/> */}
      <Route exact path="/home" component={HomeContainer}/>
      <Route exact path="/sign-up" component={SignUpContainer}/>
      <Route exact path="/" component={LoginContainer}/>
    </Switch>
  </BrowserRouter>
)