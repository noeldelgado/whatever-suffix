import React, { memo, Fragment } from 'react';
import { Box, Tooltip } from '@material-ui/core';
import { Textfit } from 'react-textfit';
import * as utils from '/utils';
import useGlobal from '/store';
import styles from './Text.module.css';

const Text = () => {
  const [font]  = useGlobal(state => state.font);
  const [mainWord]  = useGlobal(state => state.mainWord);
  const [suffix]  = useGlobal(state => state.suffix);
  const [tagline]  = useGlobal(state => state.tagline);
  const [textTrasform] = useGlobal(state => state.textTrasform);

  if (!mainWord && !suffix) {
    return void 0;
  }

  let w = utils[textTrasform](mainWord);
  let s = utils[textTrasform](suffix);

  return (
    <Fragment>
      <Tooltip title={font}>
        <Box
          className={styles.text}
          style={{fontFamily: font}}
        >
          <Textfit mode='single' max={400}>
            {w + s}
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
