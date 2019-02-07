import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import moment from 'moment';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';

import MainLayout from '../layout/main';

import auth, { logout } from '../auth';
import { getGroup } from '../service/meetup';

class Group extends React.Component {
  static async getInitialProps(context) {
    const { token, user } = await auth(context);
    const { query: { groupName } } = context;
    try {
      const { data } = await getGroup(groupName, token);

      // sorting by status (upcoming first) and then buy date (desc)
      data.sort((a, b) => b.status - a.status || new Date(b.local_date) - new Date(a.local_date));

      return { data, user };
    } catch (e) {
      context.res.writeHead(302, { Location: '/' });
      context.res.end();
    }
    return {};
  }

  render() {
    const { data, user } = this.props;
    return (
      <MainLayout user={user} onLogoutClick={logout}>
        { data
          ? (
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Event Name</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Attendees</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((d, i) => (
                  <TableRow key={d.id}>
                    <TableCell>
                      <Link
                        prefetch={i <= 5}
                        as={`/${d.group.urlname}/events/${d.id}`}
                        href={
                          {
                            pathname: '/event',
                            query: { groupName: d.group.urlname, eventId: d.id },
                          }
                        }
                      >
                        <a href={`/${d.group.urlname}/events/${d.id}`}>{d.name}</a>
                      </Link>
                    </TableCell>
                    <TableCell>{moment(d.local_date).fromNow()}</TableCell>
                    <TableCell>{d.status === 'past' ? d.yes_rsvp_count : `${d.yes_rsvp_count} / ${d.waitlist_count}` }</TableCell>
                    <TableCell>{d.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )
          : <div>Nothing To See Here</div>
        }
      </MainLayout>
    );
  }
}

Group.propTypes = {
  data: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
};

export default Group;
