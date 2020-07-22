import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import LoginComponent from './component';
import { LoginComponentStyle } from './styles';
import { setUser } from '../../redux/user-detail/actions'
import {  UserDetailTypes } from '../../redux/user-detail/types';

const mapDispatchToProps = (dispatch:any) => {
  return {
    setUserAction: (payload: UserDetailTypes) => dispatch(setUser(payload))
  }
}

/**
 * Container for LoginComponent.
 */
export const LoginContainer = withRouter(connect(null,mapDispatchToProps)(withStyles(LoginComponentStyle)(LoginComponent)));