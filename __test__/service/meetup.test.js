import nock from 'nock';
import dotenv from 'dotenv';

import {
  getGroup,
  getGroupRecs,
  getGroupEvent,
  getEventRsvps,
  getEventAttendance,
  self,
} from '../../service/meetup';

dotenv.config();

const meetupApi = nock('https://api.meetup.com/');

const groupName = 'reactjs-dallas';
const authToken = '123456';

nock.disableNetConnect();

describe('Meetup', () => {
  it('should get your meetup profile', async () => {
    // expect.assertions(1);
    const selfObj = {
      name: 'Self',
      visited: 1549496235000,
      id: 10802245,
      state: 'TX',
      lang: 'en_US',
      lat: 33.15999984741211,
      status: 'active',
    };
    meetupApi
      .get('/2/member/self/')
      .query({ access_token: authToken })
      .reply(200, selfObj, { 'Access-Control-Allow-Origin': '*' });

    const { data } = await self(authToken);
    await expect(data).toMatchObject(selfObj);
  });

  it('should get a Meetup Group', async () => {
    // expect.assertions(1);
    const groupObj = {
      created: 1507747389000,
      duration: 7200000,
      id: 'pbbdwnyzdbqb',
      name: 'ReactJS @ Robert Half',
      rsvp_limit: 80,
      status: 'upcoming',
      time: 1550019600000,
      local_date: '2019-02-12',
      local_time: '19:00',
      waitlist_count: 110,
      yes_rsvp_count: 80,
    };
    meetupApi
      .get(/^\S*\/events$/)
      .query({ status: 'past,upcoming', access_token: authToken })
      .reply(200, [groupObj], { 'Access-Control-Allow-Origin': '*' });

    const { data } = await getGroup(groupName, authToken);
    await expect(data).toMatchObject([groupObj]);
  });

  it('should get a Meetup Group Event', async () => {
    // expect.assertions(1);
    const eventObj = {
      created: 1507747389000,
      duration: 7200000,
      id: 'pbbdwnyzdbqb',
      name: 'ReactJS @ Robert Half',
      rsvp_limit: 80,
      status: 'upcoming',
      time: 1550019600000,
      local_date: '2019-02-12',
      local_time: '19:00',
      waitlist_count: 110,
      yes_rsvp_count: 80,
    };
    meetupApi
      .get(/^\S*\/events\/\S*$/)
      .query({ access_token: authToken })
      .reply(200, eventObj, { 'Access-Control-Allow-Origin': '*' });

    const { data } = await getGroupEvent(groupName, 'pbbdwnyzdbqb', authToken);
    await expect(data).toMatchObject(eventObj);
  });

  it('should get a Meetup Group Event RSVPs', async () => {
    // expect.assertions(1);
    const rsvpObj = {
      created: 1547830417000,
      updated: 1548883193000,
      response: 'yes',
      guests: 0,
    };
    meetupApi
      .get(/^\S*\/events\/\S*\/rsvps$/)
      .query({ access_token: authToken })
      .reply(200, [rsvpObj], { 'Access-Control-Allow-Origin': '*' });

    const { data } = await getEventRsvps(groupName, 'pbbdwnyzdbqb', authToken);
    await expect(data).toMatchObject([rsvpObj]);
  });

  it('should get a Meetup Group Event Attendance', async () => {
    // expect.assertions(1);
    const attendanceObj = {
      member: {
        id: 242718634,
        name: 'Aaron H.',
      },
      rsvp: {},
    };
    meetupApi
      .get(/^\S*\/events\/\S*\/attendance/)
      .query({ access_token: authToken })
      .reply(200, [attendanceObj], { 'Access-Control-Allow-Origin': '*' });

    const { data } = await getEventAttendance(groupName, 'pbbdwnyzdbqb', authToken);
    await expect(data).toMatchObject([attendanceObj]);
  });

  it('should get a Meetup Group Recommendations', async () => {
    // expect.assertions(1);
    const recObj = {
      score: 0.9645414352416992,
      id: 257764,
      name: 'Dallas Open Source Saturday',
      status: 'active',
      link: 'https://www.meetup.com/opensource-62/',
      urlname: 'opensource-62',
    };
    meetupApi
      .get(/^\S*\/events\/\S*\/rsvps$/)
      .query({ access_token: authToken })
      .reply(200, [recObj], { 'Access-Control-Allow-Origin': '*' });

    const { data } = await getGroupRecs(authToken);
    await expect(data).toMatchObject([recObj]);
  });
});
