import React, { memo, useState, useEffect } from 'react';
import { Box } from '@material-ui/core';
import useGlobal from '/store';
import styles from './Logo.module.css';

const internals = {
  reChar: new RegExp(/[a-z]|[A-Z]/),
  textColorFilled: 'var(--app-color-main)',
  textColorOutlined: 'var(--app-color-text)'
};

const Logo = () => {
  const [logoShape] = useGlobal(state => state.logoShape);
  const [mainWord] = useGlobal(state => state.mainWord);
  const [suffix] = useGlobal(state => state.suffix);
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
    <Box position='relative' mb={2}>
      <svg className={styles.svg} viewBox="0 0 100 100">
        {logoShape.path}
      </svg>
      <Box className={styles.text} style={{color: textColor}}>
        {wordFirstLetter}{suffixFirstLetter}
      </Box>
    </Box>
  );
};

export default memo(Logo);
