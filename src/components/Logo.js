import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import { rand } from '/utils';
import styles from './Logo.module.css';

const internals = {
  shapes: [
    () => <path d="M50,100 C64.2347994,100 77.0802489,94.0514861 86.1861557,84.5046511 C94.7448934,75.5314803 100,63.3794381 100,50 C100,35.3702558 93.7168237,22.2080261 83.7017601,13.0645998 C74.8129837,4.94943693 62.9844933,0 50,0 C35.1111963,0 21.7423399,6.50766801 12.5826665,16.8337683 C4.75391018,25.6594676 0,37.2745662 0,50 C0,62.9388732 4.91471905,74.7298523 12.979181,83.6079611 C22.1259525,93.6775768 35.3246357,100 50,100 Z"/>,
    () => <path d="M0,0 C15.6666667,2.08189956e-15 32,2.08189956e-15 49,0 C66,0 83,0 100,0 C100,12.6666667 100,28 100,46 C100,64 100,82 100,100 C85.3333333,100 69.3333333,100 52,100 C34.6666667,100 17.3333333,100 0,100 C9.79717439e-16,81.3333333 9.79717439e-16,64 0,48 C0,32 0,16 0,0 Z"/>,
  ]
};

const Logo = ({ text, suffix }) => {
  const shape = rand(internals.shapes)();
  const wordFirstLetter = text?.[0].toUpperCase();
  const suffixFirstLetter = suffix?.match(/[a-z]|[A-Z]/)?.[0].toUpperCase();

  return (
    <Box position='relative' mb={2}>
      <svg className={styles.svg} viewBox="0 0 100 100">
        {shape}
      </svg>
      <Box className={styles.text}>
        {wordFirstLetter}{suffixFirstLetter}
      </Box>
    </Box>
  );
};

Logo.propTypes = {
  text: PropTypes.string.isRequired,
  suffix: PropTypes.string.isRequired
};

export default memo(Logo);
