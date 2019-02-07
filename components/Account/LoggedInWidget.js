import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Chip, Tooltip } from '@material-ui/core';
import PowerIcon from '@material-ui/icons/PowerSettingsNew';
import { withStyles } from '@material-ui/core/styles';

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

const getAvatar = (thumbLink, name) => {
  if (thumbLink) {
    return <Avatar src={thumbLink} />;
  }
  return <Avatar>{name.charAt(0).toUpperCase()}</Avatar>;
};

const LoggedInWidget = ({ classes, user, handleLogout }) => {
  const { name, photo: { thumb_link: thumbLink } = {} } = user; // eslint-disable-line camelcase
  return (
    <Chip
      avatar={getAvatar(thumbLink, name)}
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
