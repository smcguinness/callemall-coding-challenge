import React from 'react';
import queryString from 'query-string';

import Router from 'next/router';

import SimpleLayout from '../layout/simple';
import LoginButton from '../components/Account/LoginButton';

import { login } from '../auth';

class Login extends React.Component {
  static async getInitialProps() {
    return {};
  }

  componentDidMount = async () => {
    const hash = queryString.parse(window.location.hash);
    if (hash.access_token) {
      await login(hash);
      Router.push('/');
    }
  }

  render() {
    return (
      <SimpleLayout>
        <div style={{ padding: '25px', textAlign: 'center' }}>
          <LoginButton />
        </div>
      </SimpleLayout>
    );
  }
}

Login.defaultProps = {
  token: null,
};

export default Login;
