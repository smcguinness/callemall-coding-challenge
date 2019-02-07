import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import {
  Typography,
} from '@material-ui/core';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import MainLayout from '../layout/main';

import auth, { logout } from '../auth';
import { getEventRsvps } from '../service/meetup';

const styles = theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});

class Rsvp extends React.Component {
  static async getInitialProps(context) {
    const { token, user } = await auth(context);
    const { query: { groupName, eventId } } = context;
    const { data } = await getEventRsvps(groupName, eventId, token);
    return { data, user };
  }

  constructor(props) {
    super(props);
    this.state = {
      expanded: null,
    };
  }

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes, data, user } = this.props;
    const { expanded } = this.state;
    return (
      <MainLayout user={user} onLogoutClick={logout}>
        {data.map(d => (
          <ExpansionPanel
            key={d.member.id}
            expanded={expanded === d.member.id}
            onChange={this.handleChange(d.member.id)}
          >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>{d.member.name}</Typography>
              <Typography className={classes.secondaryHeading}>{d.response}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                maximus est, id dignissim quam.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))}
      </MainLayout>
    );
  }
}

Rsvp.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
};

export default withStyles(styles)(Rsvp);
