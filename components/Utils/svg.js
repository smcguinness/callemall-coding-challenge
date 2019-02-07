import React from 'react';
import PropTypes from 'prop-types';

const SVG = ({
  style,
  width,
  className,
  height,
  viewBox,
  children,
}) => (
  <svg
    width={width}
    style={style}
    height={height}
    viewBox={viewBox}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    {children}
  </svg>
);

SVG.defaultProps = {
  style: {},
  width: '100%',
  className: '',
  height: '100%',
  viewBox: '0 0 100 100',
};

SVG.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  style: PropTypes.object,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  viewBox: PropTypes.string,
};

export default SVG;
