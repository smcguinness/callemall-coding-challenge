import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { CssBaseline, Paper } from '@material-ui/core';
import Header from '../components/Header';

const styles = theme => ({
  root: {
    display: 'flex',
    ...theme.mixins.gutters(),
    margin: '100px 25px',
    maxHeight: '650px',
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    overflowY: 'scroll',
  },
});

const MainLayout = ({
  children,
  classes,
  onLogoutClick,
  user,
}) => (
  <Fragment>
    <CssBaseline />
    <Header user={user} handleLogout={onLogoutClick} />
    <Paper className={classes.root}>
      {children}
    </Paper>
  </Fragment>
);

MainLayout.defaultProps = {
  user: {},
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  onLogoutClick: PropTypes.func.isRequired,
  user: PropTypes.object,
};

export default withStyles(styles)(MainLayout);
