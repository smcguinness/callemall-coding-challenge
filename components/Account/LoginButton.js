import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

import MeetupIcon from '../Assets/MeetupLogo';

const styles = theme => ({
  buttonIcon: {
    marginRight: theme.spacing.unit * 2,
  },
});

class LoginButton extends Component {
  onLoginClick = () => {
    window.location = 'https://secure.meetup.com/oauth2/authorize?client_id=abfekme6in3k4dfbqcfdn2d3kd&response_type=token&redirect_uri=http://localhost:3000/login';
  }

  render() {
    const { classes } = this.props;
    return (
      <Button variant="outlined" onClick={this.onLoginClick}>
        <MeetupIcon className={classes.buttonIcon} fill="#f93d5d" height="24" width="24" />
        Login via Meetup
      </Button>
    );
  }
}

LoginButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginButton);
