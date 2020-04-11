import React, { memo, useEffect, useState } from 'react';
import { Box, Tooltip } from '@material-ui/core';
import { Textfit } from 'react-textfit';
import * as utils from '/utils';
import useGlobal from '/store';

const Text = () => {
  const [{
    font,
    mainWord,
    suffix,
    textTransform
  }] = useGlobal(state => ({
    font: state.font,
    mainWord: state.mainWord,
    suffix: state.suffix,
    textTransform: state.textTransform
  }));

  const [wordTransform, setWordTransform] = useState('');
  const [suffixTransform, setSuffixTransform] = useState('');

  useEffect(() => {
    setWordTransform(utils[textTransform](mainWord));
  }, [textTransform, mainWord]);

  useEffect(() => {
    setSuffixTransform(utils[textTransform](suffix));
  }, [textTransform, suffix]);

  return (
    <Tooltip title={font}>
      <Box style={{fontFamily: font}}>
        <Textfit mode='single' max={400}>
          {wordTransform + suffixTransform}
        </Textfit>
      </Box>
    </Tooltip>
  );
};

export default memo(Text);
