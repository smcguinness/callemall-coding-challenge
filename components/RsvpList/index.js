import React from 'react';
import PropTypes from 'prop-types';

import {
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader,
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
    const color = (response === 'yes' ? 'green' : 'yellow');
    if (guests > 0) {
      return <DoneAllIcon fill={color} />;
    }
    return <DoneIcon fill={color} />;
  }
  return <CloseIcon fill="red" />;
};

const renderRSVPItem = (rsvp, { member: { id, name }, response }) => (
  <ListItem alignItems="flex-start" key={id}>
    <ListItemText
      primary={name}
      secondary={(
        <React.Fragment>
          <Typography component="span" color="textSecondary">
            {response}
          </Typography>
        </React.Fragment>
      )}
    />
    <ListItemSecondaryAction>
      {getResponseIcon(rsvp)}
    </ListItemSecondaryAction>
  </ListItem>
);

const RsvpList = ({ classes, rsvps }) => (
  <List
    className={classes.list}
    subheader={<ListSubheader className={classes.subheader} component="div">Event Attendees</ListSubheader>}
  >
    {rsvps.filter(d => d.response === 'yes').map(d => renderRSVPItem(d))}
    {rsvps.filter(d => d.response === 'waitlist').map(d => (
      <ListItem alignItems="flex-start" key={d.member.id}>
        <ListItemText
          primary={d.member.name}
          secondary={(
            <React.Fragment>
              <Typography component="span" className={classes.inline} color="textSecondary">
                {d.response}
              </Typography>
            </React.Fragment>
          )}
        />
      </ListItem>
    ))}
    {rsvps.filter(d => d.response === 'no').map(d => (
      <ListItem alignItems="flex-start" key={d.member.id}>
        <ListItemText
          primary={d.member.name}
          secondary={(
            <React.Fragment>
              <Typography component="span" className={classes.inline} color="textSecondary">
                {d.response}
              </Typography>
            </React.Fragment>
          )}
        />
      </ListItem>
    ))}
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
