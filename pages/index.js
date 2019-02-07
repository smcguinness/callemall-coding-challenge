import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  TextField,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import Router from 'next/router';
import Link from 'next/link';

import auth, { logout } from '../auth';
import { getGroupRecs } from '../service/meetup';

import SimpleLayout from '../layout/simple';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
});

class Index extends React.Component {
  static async getInitialProps(context) {
    const { token, user } = await auth(context);
    const { data: recommendedGroups } = await getGroupRecs(token);

    return { user, recommendedGroups };
  }

  constructor(props) {
    super(props);

    this.state = {
      inputValue: 'reactjs-dallas',
    };
  }

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  }

  handleInputEnter = (e) => {
    if (e.which === 13 || e.keyCode === 13) {
      this.handleMeetupSearchClick();
    }
  }

  handleMeetupSearchClick = () => {
    const { inputValue } = this.state;
    Router.push({
      pathname: '/group',
      query: { groupName: inputValue },
    },
    inputValue);
  }

  render() {
    const { inputValue } = this.state;
    const { classes, recommendedGroups, user } = this.props;
    return (
      <SimpleLayout user={user} onLogoutClick={logout}>
        <div style={{ padding: '25px', textAlign: 'center' }}>
          <TextField
            label="MeetUp Group"
            onChange={this.handleInputChange}
            onKeyPress={this.handleInputEnter}
            value={inputValue}
            variant="outlined"
            style={{ minWidth: '350px' }}
          />
          <Button onClick={this.handleMeetupSearchClick} size="large" className={classes.margin}>
            Enter
          </Button>
        </div>
        {
          recommendedGroups
            .slice(0, 5)
            .map(r => (
              <Link key={r.id} as={r.urlname} href={{ pathname: '/group', query: { groupName: r.urlname } }}>
                <a href={`/${r.urlname}`}>{r.name}</a>
              </Link>
            ))
        }
      </SimpleLayout>
    );
  }
}

Index.propTypes = {
  user: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);
