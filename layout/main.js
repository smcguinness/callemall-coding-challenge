import React, { cloneElement, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { CssBaseline, Paper } from '@material-ui/core';
import Header from '../components/Header';

const styles = theme => ({
  '@global': {
    body: {
      overflowY: 'hidden',
    },
  },
  root: {
    display: 'flex',
    ...theme.mixins.gutters(),
    margin: '100px 25px',
    maxHeight: 'calc(100vh - 125px)',
    height: 'calc(100vh - 125px)',
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    overflowY: 'scroll',
  },
});

const MainLayout = ({
  children,
  classes,
  component,
  onLogoutClick,
  user,
}) => {
  const Component = component || Paper;
  return (
    <Fragment>
      <CssBaseline />
      <Header user={user} handleLogout={onLogoutClick} />
      <Component className={classes.root}>
        {children}
      </Component>
    </Fragment>
  );
};

MainLayout.defaultProps = {
  component: Paper,
  user: {},
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  component: PropTypes.string,
  classes: PropTypes.object.isRequired,
  onLogoutClick: PropTypes.func.isRequired,
  user: PropTypes.object,
};

export default withStyles(styles)(MainLayout);
