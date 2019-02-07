import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { CssBaseline } from '@material-ui/core';
import Header from '../components/Header';

const MainLayout = ({ children, user, onLogoutClick }) => (
  <Fragment>
    <CssBaseline />
    <Header user={user} handleLogout={onLogoutClick} />
    {children}
  </Fragment>
);

MainLayout.defaultProps = {
  user: {},
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  onLogoutClick: PropTypes.func.isRequired,
  user: PropTypes.object,
};

export default MainLayout;
