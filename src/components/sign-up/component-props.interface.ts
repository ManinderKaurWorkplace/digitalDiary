import { UserDetailTypes } from '../../redux/user-detail/types';

/**
 * To define prop-types for SignUpComponent.
 */
export interface SignUpComponentPropsInterface {
  /**
   * @callback setUserAction: Callback to set user detail in redux-store.
   * 
   * @param payload: Contains data to be set as user detail.
   */
  setUserAction: (payload: UserDetailTypes) => void;
}