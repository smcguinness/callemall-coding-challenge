import React from 'react';
import PropTypes from 'prop-types';

import SVG from '../Utils/svg';

const RsvpLogo = ({
  fill,
  height,
  width,
  ...props
}) => (
  <SVG height={height} viewBox="0 0 100 100" width={width} {...props}>
    <path fill={fill} d="M91.6 29C86.8 16.7 78.3 7.9 65.9 3.1 55-1.1 44-.9 33.1 3.5 24.1 7.2 17 13.3 12 21.7c-3.6 6-5.9 12.5-6.1 19.5-.3 6.3-.4 12.5.1 18.8.4 5.6 2 10.8 4.6 15.7 3.8 7.4 9.2 13.2 16.3 17.6 6.7 4.1 14 6.4 21.9 6.5 14.7.2 29.4 0 44 0 1.5 0 1.5 0 1.5-1.6V70 44.2c0-5.1-.8-10.2-2.7-15.2zM50.1 63.2c-4.1 0-7.5-3.4-7.5-7.6 0-4 3.5-7.4 7.4-7.4 4 0 7.5 3.5 7.4 7.5 0 4.1-3.3 7.5-7.3 7.5zm32.4 19.2H69c-1 0-1.1-.5-1.1-1.3V64.5 48.3c0-7.8-3.9-14.5-11.5-17.6-8.3-3.4-18.3.4-22.4 8.4-1.2 2.3-2 4.7-2 7.3 0 .7-.2 1.1-1.1 1-2.2-.1-4.4-.1-6.7 0-.9 0-1.1-.3-1.1-1.1.2-5.6 2.1-10.7 5.5-15.1 4.5-5.8 10.5-9.4 17.8-10.2 8.6-1 16.2 1.6 22.3 7.9 5.3 5.4 7.6 11.9 7.6 19.4v23.8c0 1.5 0 1.5 1.5 1.5h4.4c.7 0 1 .3 1 .9v6.9c.3.7 0 1-.7 1z" />
  </SVG>
);

RsvpLogo.defaultProps = {
  fill: '#f45353',
  height: '50px',
  width: '50px',
};

RsvpLogo.propTypes = {
  fill: PropTypes.string,
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default RsvpLogo;
