import axios from 'axios';
import { browserHistory }  from 'react-router';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from './types';

const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {
  return dispatch => {
    // Submit to server
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then(response => {
        // if request is good...
        // - update state to indicate user is authed
        dispatch({ type: AUTH_USER });
        // - save the jwt token
        localStorage.setItem('token', response.data.token);
        // - redirect to feature route
        browserHistory.push('/feature');
      })
      .catch((error) => {
        // if request is bad...
        // - show err
        console.log(error);
        dispatch(authError('Bad Login Info'));
      });
  }
}

export function signupUser({ email, password}) {
  return dispatch => {
    axios.post(`${ROOT_URL}/signup`, { email, password })
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/feature');
      })
      .catch(error => {
        dispatch(authError(error.data.error));
      });
  }

}
export function signoutUser() {
  localStorage.removeItem('token');
  return { type: UNAUTH_USER };
}

function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}
