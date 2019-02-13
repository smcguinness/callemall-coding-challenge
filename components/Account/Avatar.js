import React from 'react';
import PropTypes from 'prop-types';
import { Avatar as MUIAvatar } from '@material-ui/core';

const Avatar = ({ src, value, ...props }) => {
  if (src !== '') {
    return <MUIAvatar src={src} {...props} />;
  }
  return <MUIAvatar {...props}>{value.charAt(0).toUpperCase()}</MUIAvatar>;
};

Avatar.defaultProps = {
  src: '',
  value: '',
};

Avatar.propTypes = {
  src: PropTypes.string,
  value: PropTypes.string,
};

export default Avatar;
