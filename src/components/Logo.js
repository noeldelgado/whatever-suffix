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
    suffix
  }] = useGlobal(state => ({
    logoShape: state.logoShape,
    mainWord: state.mainWord,
    suffix: state.suffix
  }));

  const [textColor, setTextColor] = useState('');

  const wordFirstLetter = mainWord.charAt(0).toUpperCase();
  const wordSecondLetter = mainWord.charAt(1).toUpperCase();
  const suffixFirstLetter = suffix?.match(internals.reChar)?.[0].toUpperCase() ?? wordSecondLetter;

  useEffect(() => {
    if (logoShape.type === 'fill')
      setTextColor(internals.textColorFilled);
    else
      setTextColor(internals.textColorOutlined);
  }, [logoShape]);

  return (
    <Box position='relative'>
      <svg viewBox='0 0 100 100'>
          {logoShape.path}
          <text x='50%' y='50%' alignmentBaseline='central' dominantBaseline='middle' textAnchor='middle'
            style={{fill: textColor}}
          >
            {wordFirstLetter}{suffixFirstLetter}
          </text>
      </svg>
    </Box>
  );
};

export default memo(Logo);
