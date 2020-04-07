import React, { memo, Fragment } from 'react';
import { Box, Tooltip } from '@material-ui/core';
import { Textfit } from 'react-textfit';
import useGlobal from '/store';
import styles from './Text.module.css';

const Text = () => {
  const [mainWord]  = useGlobal(state => state.mainWord);
  const [suffix]  = useGlobal(state => state.suffix);
  const [tagline]  = useGlobal(state => state.tagline);
  const [font]  = useGlobal(state => state.font);

  if (!mainWord && !suffix) {
    return void 0;
  }

  return (
    <Fragment>
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
      <Box className={styles.tagline}>
        <Textfit mode='single' max={30}>
          {tagline}
        </Textfit>
      </Box>
    </Fragment>
  );
};

export default memo(Text);
