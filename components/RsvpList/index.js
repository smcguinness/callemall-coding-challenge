import React from 'react';
import PropTypes from 'prop-types';

import {
  List,
  ListSubheader,
} from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';

import RSVPItem from './RSVPItem';

const styles = () => ({
  subheader: {
    backgroundColor: '#ffffff',
  },
});

const RsvpList = ({ classes, rsvps }) => (
  <List
    className={classes.list}
    subheader={<ListSubheader className={classes.subheader} component="div">Event Attendees</ListSubheader>}
  >
    {rsvps.filter(d => d.response === 'yes').map(d => <RSVPItem {...d} />)}
    {rsvps.filter(d => d.response === 'waitlist').map(d => <RSVPItem {...d} />)}
    {rsvps.filter(d => d.response === 'no').map(d => <RSVPItem {...d} />)}
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
