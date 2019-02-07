import React from 'react';
import queryString from 'query-string';
import Router from 'next/router';

import CircularProgress from '@material-ui/core/CircularProgress';

import SimpleLayout from '../layout/simple';
import LoginButton from '../components/Account/LoginButton';

import { login } from '../auth';

class Login extends React.Component {
  static async getInitialProps() {
    return {};
  }

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }

  componentDidMount = async () => {
    const hash = queryString.parse(window.location.hash);
    this.setState({ isLoading: !!hash.access_token });
    if (hash.access_token) {
      await login(hash);
      Router.replace('/');
    }
  }

  render() {
    const { isLoading } = this.state;
    return (
      <SimpleLayout>
        <div style={{ padding: '25px', textAlign: 'center' }}>
          {!isLoading ? <LoginButton /> : <CircularProgress /> }
        </div>
      </SimpleLayout>
    );
  }
}

Login.defaultProps = {
  token: null,
};

export default Login;
