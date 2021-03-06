import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
} from '@material-ui/core';

import Link from 'next/link';

import LoginButton from '../Account/LoginButton';
import LoggedInWidget from '../Account/LoggedInWidget';

import AppLogo from '../Assets/logo';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  header: {
    background: '#ffffff',
    color: '#4b4a4b',
  },
  grow: {
    flexGrow: 1,
  },
});

const Header = ({
  classes,
  handleLogout,
  hideLogo,
  user,
}) => (
  <AppBar position="fixed" color="default" className={classes.header}>
    <Toolbar style={{ minHeight: '60px' }}>
      {!hideLogo
      && (
        <Link as="/" href="/">
          <a href="/"><AppLogo width={40} /></a>
        </Link>
      )}
      <div className={classes.grow} />
      { user && user.id
        ? <LoggedInWidget user={user} handleLogout={handleLogout} /> : <LoginButton />
      }
    </Toolbar>
  </AppBar>
);

Header.defaultProps = {
  hideLogo: false,
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  handleLogout: PropTypes.func,
  hideLogo: PropTypes.bool,
  user: PropTypes.object,
};

export default withStyles(styles)(Header);
