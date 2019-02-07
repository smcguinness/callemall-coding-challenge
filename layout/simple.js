import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import Header from '../components/Header';

import AppLogo from '../components/Assets/logo';

const styles = () => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '500px',
  },
});

const SimpleLayout = ({
  children,
  classes,
  onLogoutClick,
  user,
}) => (
  <Fragment>
    <CssBaseline />
    <Header user={user} hideLogo handleLogout={onLogoutClick} />
    <div className={classes.container}>
      <AppLogo />
      {children}
    </div>
  </Fragment>
);

SimpleLayout.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  onLogoutClick: PropTypes.func,
  user: PropTypes.object,
};

export default withStyles(styles)(SimpleLayout);
