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
    <Link href={url} underline='always' target='_blank' rel='noopener noreferrer'>
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
    <Box p={3}>
      <Box display='flex' alignItems='center' mb={2}>
        <Box mr={1}>
          <svg width={44} height={44} viewBox='0 0 44 44' style={{ display: 'block' }}>
            <rect fill='var(--app-color-bg)' width='100%' height='100%' rx={4} ry={4} />
            <text fill='#fff' style={{ fontSize: 20, fontWeight: 700 }}>
              <tspan x={12} y={34}>w_</tspan>
            </text>
          </svg>
        </Box>
        <Box>
          <Typography variant='h6' style={{ lineHeight: 1 }}>
            whatever-script
          </Typography>
          <Typography variant='subtitle2'>
            {VERSION}
          </Typography>
        </Box>
      </Box>

      <Typography gutterBottom>
        Random word based app inspired by <TwitterLink handler='freezydorito'/>’s {''}
        <TwitterLink handler='WhateverScript'/>.
      </Typography>

      <Typography component='ul' paragraph>
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
