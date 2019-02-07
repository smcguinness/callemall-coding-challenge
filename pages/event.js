/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Paper } from '@material-ui/core';

import MainLayout from '../layout/main';

import auth, { logout } from '../auth';
import { getGroupEvent } from '../service/meetup';

class Event extends React.Component {
  static async getInitialProps(context) {
    const { token, user } = await auth(context);

    const { query: { groupName, eventId } } = context;
    const { data } = await getGroupEvent(groupName, eventId, token);

    return { data, user };
  }

  render() {
    const { data, user } = this.props;
    return (
      <MainLayout user={user} onLogoutClick={logout}>
        <Paper>
          <Link
            prefetch
            as={`/${data.group.urlname}/events/${data.id}/rsvps`}
            href={
              {
                pathname: '/rsvps',
                query: { groupName: data.group.urlname, eventId: data.id },
              }
            }
          >
            <a href={`/${data.group.urlname}/events/${data.id}`}>RSVPs</a>
          </Link>
          { data
            ? (
              <div dangerouslySetInnerHTML={{ __html: data.description }} />
            )
            : <div>Nothing To See Here</div>
          }
        </Paper>
      </MainLayout>
    );
  }
}

Event.propTypes = {
  data: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

export default Event;
