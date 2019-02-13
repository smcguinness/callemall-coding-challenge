import React from 'react';
import PropTypes from 'prop-types';
import { Chip, Tooltip } from '@material-ui/core';
import PowerIcon from '@material-ui/icons/PowerSettingsNew';
import { withStyles } from '@material-ui/core/styles';

import Avatar from './Avatar';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit,
  },
});

const LoggedInWidget = ({ classes, user, handleLogout }) => {
  const { name, photo: { thumb_link: thumbLink } = {} } = user; // eslint-disable-line camelcase
  return (
    <Chip
      avatar={<Avatar src={thumbLink} value={name} />}
      variant="outlined"
      label={name}
      className={classes.chip}
      onDelete={handleLogout}
      deleteIcon={<Tooltip title="Logout"><PowerIcon /></Tooltip>}
    />
  );
};

LoggedInWidget.defaultProps = {
  user: {},
};

LoggedInWidget.propTypes = {
  classes: PropTypes.object.isRequired,
  handleLogout: PropTypes.func.isRequired,
  user: PropTypes.object,
};

export default withStyles(styles)(LoggedInWidget);
