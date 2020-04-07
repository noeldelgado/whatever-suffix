import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Box, Link, Typography } from '@material-ui/core';
import useGlobal from '/store';
import { VERSION } from '/constants';
import favicon from '/public/images/favicon-32x32.png';

const internals = {
  formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }
};

function GeneralLink({ url, text }) {
  return (
    <Link href={url} color='inherit' underline='always' target='_blank' rel='noopener noreferrer'>
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
  const [wordsLen] = useGlobal(state => state.wordsLen);
  const [fontsLen] = useGlobal(state => state.fontsLen);

  return (
    <Box pt={3} px={4} pb={4}>
      <Box display='flex' alignItems='center' mb={1}>
        <Box mr={2}>
          <img src={favicon} width={32} height={32} alt='logo' style={{ display: 'block', boxShadow: '0 0 0 2px', borderRadius: '4px' }}/>
        </Box>
        <Box>
          <Typography variant='h6'>
            whatever-script
          </Typography>
          <Typography variant='subtitle2'>
            {VERSION}
          </Typography>
        </Box>
      </Box>

      <Typography variant='subtitle1' gutterBottom>
        Random word based app inspired by <TwitterLink handler='freezydorito'/>’s {''}
        <TwitterLink handler='WhateverScript'/>.
      </Typography>

      <Typography component='ul' gutterBottom>
        <li>
          It uses <GituhubLink handler='sindresorhus/word-list'/> {''}
          with {internals.formatNumber(wordsLen)} entries to randomly select English words from the {''}
          <GituhubLink handler='atebits/Words/blob/master/Words/en.txt' text='Letterpress Word List'/>. {''}
          One-letter words are not included. Many common bad words are also filtered out.
        </li>
        <li>
          Uses {fontsLen} <GeneralLink url='https://fonts.google.com/' text='GoogleFonts'/>  {''}
          to randomly load fonts for every new combination {''}
          (Hover over or long-press to see the font family name).
        </li>
        <li>
          Uses <GituhubLink handler='jessuni/SafeColor'/> to generate accessible {''}
          color combinations that complies with {''}
          <GeneralLink url='https://www.w3.org/WAI/WCAG21/quickref/#contrast-minimum' text='WCAG 2.1 success criteria 1.4.3'/>.
        </li>
        <li>
          Material Design, Icons and Fonts by <TwitterLink handler='Google'/>.
        </li>
        <li>
          <GituhubLink handler='mui-org/material-ui' text='Material-UI'/> {''}
          react components by <GituhubLink handler='mui-org' text='Call-Em-All'/>.
        </li>
        <li>
          <GituhubLink handler='malte-wessel/react-textfit'/> ensures the text is kept on a single line.
        </li>
        <li>
          Favicons generated using <GeneralLink url='https://favicon.io/favicon-converter/' text='favicon.io'/>.
        </li>
        <li>
          Build using <GeneralLink url='https://parceljs.org/' text='Parcel'/> bundler.
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
