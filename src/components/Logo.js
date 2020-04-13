import React, { memo, useState, useEffect } from 'react';
import { Box } from '@material-ui/core';
import useGlobal from '/store';

const internals = {
  reChar: new RegExp(/[a-z]|[A-Z]/),
  textColorFilled: 'var(--app-color-main)',
  textColorOutlined: 'var(--app-color-text)'
};

const Logo = () => {
  const [{
    logoShape,
    mainWord,
    showLogo,
    suffix
  }] = useGlobal(state => ({
    logoShape: state.logoShape,
    mainWord: state.mainWord,
    showLogo: state.showLogo,
    suffix: state.suffix
  }));

  const [textColor, setTextColor] = useState('');
  const [firstLetter, setFirstLetter] = useState('');
  const [secondLetter, setSecondLetter] = useState('');

  useEffect(() => {
    if (logoShape.type === 'fill')
      setTextColor(internals.textColorFilled);
    else
      setTextColor(internals.textColorOutlined);
  }, [logoShape]);

  useEffect(() => {
    setFirstLetter(mainWord.charAt(0).toUpperCase());
  }, [mainWord]);

  useEffect(() => {
    setSecondLetter(suffix?.match(internals.reChar)?.[0].toUpperCase());
  }, [suffix]);

  if (showLogo === false) {
    return void 0;
  }

  return (
    <Box position='relative'>
      <svg viewBox='0 0 100 100'>
          {logoShape.path}
          <text
            x='50%'
            y='50%'
            alignmentBaseline='central'
            dominantBaseline='middle'
            textAnchor='middle'
            style={{fill: textColor}}
          >
            {firstLetter}{secondLetter}
          </text>
      </svg>
    </Box>
  );
};

export default memo(Logo);
