import React, { memo } from 'react';
import { Box } from '@material-ui/core';
import useGlobal from '/store';
import styles from './Logo.module.css';

const Logo = () => {
  const [logoShape] = useGlobal(state => state.logoShape);
  const [mainWord] = useGlobal(state => state.mainWord);
  const [suffix] = useGlobal(state => state.suffix);

  const wordFirstLetter = mainWord.charAt(0).toUpperCase();
  const wordSecondLetter = mainWord.charAt(1).toUpperCase();
  const suffixFirstLetter = suffix?.match(/[a-z]|[A-Z]/)?.[0].toUpperCase() ?? wordSecondLetter;

  return (
    <Box position='relative' mb={2}>
      <svg className={styles.svg} viewBox="0 0 100 100">
        {logoShape.path}
      </svg>
      <Box className={styles.text}>
        {wordFirstLetter}{suffixFirstLetter}
      </Box>
    </Box>
  );
};

export default memo(Logo);
