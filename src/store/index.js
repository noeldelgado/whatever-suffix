import React from 'react';
import useGlobalHook from 'use-global-hook';
import * as actions from '/actions';

import GoogleFontsList from '/data/google-fonts-list.json';
import { rand } from '/utils';
import { DEFAULT_SUFFIXES, LOGO_SHAPES, LOGO_SHAPES_LEN } from '/constants';

export default useGlobalHook(React, {
  fetching: true,
  error: false,
  errorMessage: '',

  // registries
  fonts: GoogleFontsList.items,
  fontsLen: GoogleFontsList.items.length,
  words: [],
  wordsLen: 0,

  mainWord: '',
  suffix: rand(DEFAULT_SUFFIXES),
  tagline: '',

  font: 'sans-serif',
  logoShape: rand(LOGO_SHAPES, LOGO_SHAPES_LEN)
}, actions);
