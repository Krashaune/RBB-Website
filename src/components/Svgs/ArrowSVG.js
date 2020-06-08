import React from 'react';
import { PseudoBox, IconButton } from '@chakra-ui/core';
import PropTypes from 'prop-types';

const ArrowSVG = ({ direction, handleMove }) => {
  const LEFT = '225';
  const RIGHT = '45';
  return (
    <PseudoBox
      fill={'orange'}
      onClick={handleMove}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <svg width="22px" height="24px" viewBox="0 0 22 24">
        <path
          transform={`rotate(${direction === 'LEFT' ? LEFT : RIGHT} 11 12)`}
          d="M 19.558594 4.285156 L 11.699219 20 C 11.5625 20.285156 11.328125 20.429688 11 20.429688 C 10.960938 20.429688 10.898438 20.421875 10.816406 20.402344 C 10.636719 20.363281 10.492188 20.269531 10.378906 20.128906 C 10.269531 19.984375 10.214844 19.824219 10.214844 19.644531 L 10.214844 12.570312 L 3.144531 12.570312 C 2.960938 12.570312 2.800781 12.515625 2.65625 12.40625 C 2.515625 12.296875 2.421875 12.148438 2.382812 11.96875 C 2.339844 11.789062 2.355469 11.617188 2.429688 11.453125 C 2.503906 11.289062 2.625 11.167969 2.785156 11.085938 L 18.5 3.230469 C 18.609375 3.171875 18.726562 3.144531 18.855469 3.144531 C 19.078125 3.144531 19.261719 3.21875 19.410156 3.375 C 19.53125 3.492188 19.609375 3.632812 19.636719 3.800781 C 19.664062 3.96875 19.640625 4.128906 19.558594 4.285156 Z M 19.558594 4.285156 "
        />
      </svg>
    </PseudoBox>
  );
};

ArrowSVG.propTypes = {
  handleMove: PropTypes.func.isRequired,
  direction: PropTypes.oneOf(['LEFT', 'RIGHT']),
};

export default ArrowSVG;
