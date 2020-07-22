import React, { FunctionComponent } from 'react';
import { Routes } from './routes/component';
import AppStore from './redux/store/config';

const App: FunctionComponent = () => 
  <AppStore>
    <Routes />
  </AppStore>

export default App;
