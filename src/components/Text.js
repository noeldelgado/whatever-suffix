import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Box, Tooltip } from '@material-ui/core';
import { Textfit } from 'react-textfit';
import styles from './Text.module.css';

const Text = ({ text, suffix, fontPrimary }) => {
  return (
    <Tooltip title={fontPrimary}>
      <Box className={styles.text} mx={'auto'} style={{fontFamily: fontPrimary}}>
        <Textfit mode='single' max={400}>
          {text}{suffix}
        </Textfit>
      </Box>
    </Tooltip>
  );
};

Text.propTypes = {
  text: PropTypes.string.isRequired,
  suffix: PropTypes.string.isRequired,
  fontPrimary: PropTypes.string.isRequired
};

export default memo(Text);
