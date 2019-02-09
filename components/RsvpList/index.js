import React from 'react';
import PropTypes from 'prop-types';
import pluralize from 'pluralize';

import {
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader,
  Tooltip,
  Typography,
} from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';

import DoneIcon from '@material-ui/icons/Done';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import CloseIcon from '@material-ui/icons/Close';

const styles = () => ({
  subheader: {
    backgroundColor: '#ffffff',
  },
});

const getResponseIcon = ({ guests, response }) => {
  if (response !== 'no') {
    const color = (response === 'yes' ? 'green' : 'grey');
    if (guests > 0) {
      return (
        <Tooltip title={pluralize('guest', guests, true)}>
          <DoneAllIcon style={{ color }} />
        </Tooltip>
      );
    }
    return <DoneIcon style={{ color }} />;
  }
  return <CloseIcon style={{ color: 'red' }} />;
};

const renderRSVPItem = ({ guests, member: { id, name }, response }) => (
  <ListItem alignItems="flex-start" key={id}>
    <ListItemText primary={name} />
    <ListItemSecondaryAction>
      {getResponseIcon({ guests, response })}
    </ListItemSecondaryAction>
  </ListItem>
);

const RsvpList = ({ classes, rsvps }) => (
  <List
    className={classes.list}
    subheader={<ListSubheader className={classes.subheader} component="div">Event Attendees</ListSubheader>}
  >
    {rsvps.filter(d => d.response === 'yes').map(d => renderRSVPItem(d))}
    {rsvps.filter(d => d.response === 'waitlist').map(d => renderRSVPItem(d))}
    {rsvps.filter(d => d.response === 'no').map(d => renderRSVPItem(d))}
  </List>
);

RsvpList.defaultProps = {
  rsvps: [],
};

RsvpList.propTypes = {
  classes: PropTypes.object.isRequired,
  rsvps: PropTypes.array,
};

export default withStyles(styles)(RsvpList);
