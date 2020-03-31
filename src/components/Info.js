import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Box, Link, Typography } from '@material-ui/core';
import { version } from '/../package.json';

function GeneralLink({ url, text }) {
  return (
    <Link href={url} color='inherit' underline='always' target='_blank' rel='noopener'>
      {text}
    </Link>
  );
}
GeneralLink.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

function TwitterLink({ handler }) {
  return <GeneralLink url={`https://twitter.com/${handler}`} text={`@${handler}`}/>;
}
TwitterLink.propTypes = {
  handler: PropTypes.string.isRequired
};

function GituhubLink({ handler, text }) {
  return <GeneralLink url={`https://github.com/${handler}`} text={text||handler}/>;
}
GituhubLink.propTypes = {
  handler: PropTypes.string.isRequired,
  text: PropTypes.string
};

const Info = () => {
  return (
    <Box pt={3} px={4} pb={4}>
      <Typography variant='h6'>
        whatever-script@{version}
      </Typography>

      <Typography variant='subtitle1' gutterBottom>
        Random word based app inspired by <TwitterLink handler='freezydorito'/>’s {''}
        <TwitterLink handler='WhateverScript'/>.
      </Typography>

      <Typography variant='subtitle1' gutterBottom>
        It uses <GituhubLink handler='sindresorhus/word-list'/> {''}
        package to randomly select English words from the {''}
        <GituhubLink handler='atebits/Words/blob/master/Words/en.txt' text='Letterpress Word List'/> {''}
        with over 274,925 entries.
      </Typography>

      <Typography variant='h6'>
        Credits
      </Typography>

      <Typography component='ul' gutterBottom>
        <li>
          Collection of English words using {''}
          <GituhubLink handler='sindresorhus/word-list'/>
        </li>
        <li>
          Material Design, Icons and Fonts by <TwitterLink handler='Google'/>
        </li>
        <li>
          <GituhubLink handler='mui-org/material-ui' text='Material-UI'/> {''}
          react components by <GituhubLink handler='mui-org' text='Call-Em-All'/>
        </li>
        <li>
          Color combinations using <GituhubLink handler='jessuni/SafeColor'/>
        </li>
        <li>
          Build using <GeneralLink url='https://parceljs.org/' text='Parcel'/> bundler
        </li>
      </Typography>

      <Typography variant='h6'>
        License
      </Typography>

      <Typography>
        MIT © <GituhubLink handler='noeldelgado' text='Noel Delgado'/>
      </Typography>
    </Box>
  );
};

export default memo(Info);
