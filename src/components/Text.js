import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Tooltip } from '@material-ui/core';
import { Textfit } from 'react-textfit';
import * as utils from '/utils';
import useStore from '/store';

const Text = ({ className = '' }) => {
  const [{ font, mainWord, suffix, textTransform }] = useStore(state => ({
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
      <Box className={className} style={{fontFamily: font}}>
        <Textfit mode='single' max={400}>
          {wordTransform + suffixTransform}
        </Textfit>
      </Box>
    </Tooltip>
  );
};

Text.propTypes = {
  className: PropTypes.string
};

export default memo(Text);
