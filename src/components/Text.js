import React, { memo, useEffect, useState, Fragment } from 'react';
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
  const [textTransform] = useGlobal(state => state.textTransform);
  const [wordTransform, setWordTransform] = useState('');
  const [suffixTransform, setSuffixTransform] = useState('');

  useEffect(() => {
    setWordTransform(utils[textTransform](mainWord));
  }, [textTransform, mainWord]);

  useEffect(() => {
    setSuffixTransform(utils[textTransform](suffix));
  }, [textTransform, suffix]);

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
            {wordTransform + suffixTransform}
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
