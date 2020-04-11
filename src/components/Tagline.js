import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import { Textfit } from 'react-textfit';
import useGlobal from '/store';

const Tagline = ({ className = '' }) => {
  const [tagline]  = useGlobal(state => state.tagline);

  return (
    <Box className={className}>
      <Textfit mode='single' max={30}>
        {tagline}
      </Textfit>
    </Box>
  );
};

Tagline.propTypes = {
  className: PropTypes.string
};

export default memo(Tagline);
