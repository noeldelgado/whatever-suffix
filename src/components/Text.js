const { count } = console;

import React, { memo } from 'react';
import { Box, Tooltip } from '@material-ui/core';
import { Textfit } from 'react-textfit';
import useGlobal from '/store';
import styles from './Text.module.css';

const Text = () => {
  count('Text');

  const [globalState]  = useGlobal();
  const { mainWord, suffix, font } = globalState;

  if (!mainWord && !suffix) {
    return void 0;
  }

  return (
    <Tooltip title={font}>
      <Box
        className={styles.text}
        style={{fontFamily: font}}
      >
        <Textfit mode='single' max={400}>
          {mainWord + suffix}
        </Textfit>
      </Box>
    </Tooltip>
  );
};

export default memo(Text);
