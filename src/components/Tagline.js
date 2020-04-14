import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import { Textfit } from 'react-textfit';
import useStore from '/store';

const Tagline = ({ className = '' }) => {
  const [{ tagline, showTagline }] = useStore(state => ({
    tagline: state.tagline,
    showTagline: state.showTagline
  }));

  if (showTagline === false) {
    return void 0;
  }

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
