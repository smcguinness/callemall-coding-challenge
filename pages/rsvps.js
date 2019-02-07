import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';

import MainLayout from '../layout/main';

import auth, { logout } from '../auth';
import { getEventRsvps } from '../service/meetup';

class Rsvp extends React.Component {
  static async getInitialProps(context) {
    const { token, user } = await auth(context);
    const { query: { groupName, eventId } } = context;
    const { data } = await getEventRsvps(groupName, eventId, token);
    return { data, user };
  }

  render() {
    const { data, user } = this.props;
    return (
      <MainLayout user={user} onLogoutClick={logout}>
        <Paper square>
          { data
            ? (
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map(d => (
                    <TableRow key={d.member.id}>
                      <TableCell>{d.member.name}</TableCell>
                      <TableCell>{d.response}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )
            : <div>Nothing To See Here</div>
          }
        </Paper>
      </MainLayout>
    );
    // if (data) {
    //   return data.map(d => <Card>{d.name}</Card>);
    // }
    // return 'Noting to see';
  }
}

Rsvp.propTypes = {
  data: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
};

export default Rsvp;
