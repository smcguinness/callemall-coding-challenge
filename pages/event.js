/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
} from '@material-ui/core';

import MainLayout from '../layout/main';
import RSVPList from '../components/RsvpList';

import auth, { logout } from '../auth';
import { getGroupEvent, getEventRsvps } from '../service/meetup';

const drawerWidth = 350;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    overflowY: 'scroll',
    marginLeft: '-25px',
    padding: '20px',
  },
  subheader: {
    backgroundColor: '#ffffff',
  },
  content: {
    flexGrow: 1,
    flexBasis: '50%',
    padding: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 4}px`,
    fontSize: theme.typography.pxToRem(14),
    color: 'rgba(0, 0, 0, 0.87)',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 400,
    lineHeight: 1.5,
    overflowY: 'scroll',
  },
  grow: {
    flexGrow: 1,
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
      <MainLayout component="div" user={user} onLogoutClick={logout}>
        <div className={classes.drawer}>
          <Typography component="h1" variant="h5" gutterBottom>{event.name}</Typography>
          <div
            dangerouslySetInnerHTML={{ __html: event.description }}
          />
        </div>
        <div className={classes.content}>
          <AppBar position="static" color="default">
            <Toolbar className={classes.grow}>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
          <RSVPList rsvps={rsvps} />
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
