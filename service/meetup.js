import axios from 'axios';

const apiURL = 'https://api.meetup.com/';

export const self = async accessToken => axios.get(`${apiURL}/2/member/self/?access_token=${accessToken}`);

export const getGroup = async (groupName, accessToken) => axios.get(`${apiURL}${groupName}/events?status=past,upcoming&access_token=${accessToken}`);

export const getGroupRecs = async accessToken => axios.get(`${apiURL}/recommended/groups?access_token=${accessToken}`);

export const getGroupEvent = async (groupName, eventId, accessToken) => axios.get(`${apiURL}${groupName}/events/${eventId}?access_token=${accessToken}`);

export const getEventRsvps = async (groupName, eventId, accessToken) => axios.get(`${apiURL}${groupName}/events/${eventId}/rsvps?access_token=${accessToken}`);

export const getEventAttendance = async (groupName, eventId, accessToken) => axios.get(`${apiURL}${groupName}/events/${eventId}/attendance?access_token=${accessToken}`);
