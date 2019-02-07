/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { withStyles } from '@material-ui/core/styles';

import {
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Typography,
} from '@material-ui/core';


import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import MainLayout from '../layout/main';

import auth, { logout } from '../auth';
import { getGroupEvent, getEventRsvps } from '../service/meetup';

const drawerWidth = 250;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    overflowY: 'scroll',
    marginLeft: '-25px',
  },
  subheader: {
    backgroundColor: '#ffffff',
  },
  content: {
    flexGrow: 1,
    flexBasis: '66%',
    padding: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 4}px`,
    fontSize: theme.typography.pxToRem(16),
    color: 'rgba(0, 0, 0, 0.87)',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 400,
    lineHeight: 1.5,
    overflowY: 'scroll',
  },
});

class Event extends React.Component {
  static async getInitialProps(context) {
    const { token, user } = await auth(context);

    const { query: { groupName, eventId } } = context;
    const { data: event } = await getGroupEvent(groupName, eventId, token);
    const { data: rsvps } = await getEventRsvps(groupName, eventId, token);

    // sorting by status (upcoming first) and then buy date (desc)
    rsvps.sort((a) => {
      if (a.response === 'yes') return -1;
      if (a.response === 'waitlist') return 0;
      return 1;
    });

    return { event, rsvps, user };
  }

  render() {
    const {
      classes,
      event,
      rsvps,
      user,
    } = this.props;

    return (
      <MainLayout user={user} onLogoutClick={logout}>
        <div className={classes.drawer}>
          <List
            className={classes.list}
            subheader={<ListSubheader className={classes.subheader} component="div">Event Attendees</ListSubheader>}
          >
            {rsvps.filter(d => d.response === 'yes').map(d => (
              <ListItem alignItems="flex-start" key={d.member.id}>
                <ListItemText
                  primary={d.member.name}
                  secondary={
                    <React.Fragment>
                      <Typography component="span" className={classes.inline} color="textSecondary">
                        {d.response}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
            ))}
            {rsvps.filter(d => d.response === 'waitlist').map(d => (
              <ListItem alignItems="flex-start" key={d.member.id}>
                <ListItemText
                  primary={d.member.name}
                  secondary={
                    <React.Fragment>
                      <Typography component="span" className={classes.inline} color="textSecondary">
                        {d.response}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
            ))}
            {rsvps.filter(d => d.response === 'no').map(d => (
              <ListItem alignItems="flex-start" key={d.member.id}>
                <ListItemText
                  primary={d.member.name}
                  secondary={
                    <React.Fragment>
                      <Typography component="span" className={classes.inline} color="textSecondary">
                        {d.response}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
            ))}
          </List>
        </div>
        <div className={classes.content}>
          <div dangerouslySetInnerHTML={{ __html: event.description }} />
        </div>
      </MainLayout>
    );
  }
}

Event.propTypes = {
  classes: PropTypes.object.isRequired,
  event: PropTypes.object.isRequired,
  rsvps: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
};

export default withStyles(styles)(Event);
