/* eslint-disable*/
import axios from 'axios';
import { showAlert } from './alerts';

export const signup = async (name, email, password, passwordConfirm) => {
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/users/signup',
      data: {
        name,
        email,
        password,
        passwordConfirm,
        role: 'user'
      }
    });
    if (res.data.status === 'success') {
      showAlert('success', 'Signed up Successully!');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (err) {
    console.log();
    showAlert('error', err.response.data.message);
  }
};
