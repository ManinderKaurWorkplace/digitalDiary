import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SignUpComponent from './component';
import { SignUpComponentStyle } from './styles';
import { setUser } from '../../redux/user-detail/actions'
import {  UserDetailTypes } from '../../redux/user-detail/types';

const mapDispatchToProps = (dispatch:any) => {
  return {
    createUserAction: (payload: UserDetailTypes) => dispatch(setUser(payload))
  }
}

/**
 * Container for SignUpComponent.
 */
export const SignUpContainer = withRouter(connect(null,mapDispatchToProps)(withStyles(SignUpComponentStyle)(SignUpComponent)));