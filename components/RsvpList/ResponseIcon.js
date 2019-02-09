import React from 'react';
import PropTypes from 'prop-types';
import pluralize from 'pluralize';

import { Tooltip } from '@material-ui/core';

import DoneIcon from '@material-ui/icons/Done';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import CloseIcon from '@material-ui/icons/Close';

const ResponseIcon = ({ guests, response }) => {
  if (response !== 'no') {
    const color = (response === 'yes' ? 'green' : 'grey');
    if (guests > 0) {
      return (
        <Tooltip title={pluralize('guest', guests, true)}>
          <DoneAllIcon style={{ color }} />
        </Tooltip>
      );
    }
    return <DoneIcon style={{ color }} />;
  }
  return <CloseIcon style={{ color: 'red' }} />;
};

ResponseIcon.defaultProps = {
  guests: 0,
  response: 'no',
};

ResponseIcon.propTypes = {
  guests: PropTypes.number,
  response: PropTypes.string,
};

export default ResponseIcon;
