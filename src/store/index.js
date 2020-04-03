import React from 'react';
import useGlobalHook from 'use-global-hook';
import * as actions from '/actions';

import GoogleFontsList from '/data/google-fonts-list.json';
import { rand } from '/utils';

const internals = {
  SUFFIXES: ['.js', 'script', '.io'],
  LOGOSHAPES: ['rect', 'circle'],
};

export default useGlobalHook(React, {
  fetching: false,
  error: false,
  errorMessage: '',

  // registries
  fonts: GoogleFontsList.items,
  fontsLen: GoogleFontsList.items.length,
  words: [],
  wordsLen: 0,

  mainWord: '',
  suffix: rand(internals.SUFFIXES),

  font: 'sans-serif',
  logoShape: rand(internals.LOGOSHAPES)
}, actions);
