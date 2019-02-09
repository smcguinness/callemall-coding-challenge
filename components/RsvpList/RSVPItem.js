import React from 'react';
import PropTypes from 'prop-types';

import {
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from '@material-ui/core';

import ResponseIcon from './ResponseIcon';

const RSVPItem = ({ guests, member: { id, name }, response }) => (
  <ListItem alignItems="flex-start" key={id}>
    <ListItemText primary={name} />
    <ListItemSecondaryAction>
      <ResponseIcon guests={guests} response={response} />
    </ListItemSecondaryAction>
  </ListItem>
);

RSVPItem.defaultProps = {
  guests: 0,
};

RSVPItem.propTypes = {
  guests: PropTypes.number,
  member: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
  response: PropTypes.string.isRequired,
};

export default RSVPItem;
