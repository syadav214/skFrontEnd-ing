// import axios from 'axios';

export default {
  user: {
    login: credentials => {
      //axios.post('/api/auth', { credentials }).then(res => res.data.user);
      const errors = { global: 'invalid' };
      return new Promise((resolve) => {
        resolve(errors);
      });
    }
  }
};
