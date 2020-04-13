import React from 'react';
import globalHook from 'use-global-hook';
import * as actions from '/actions';

import GoogleFontsList from '/data/google-fonts-list.json';
import { rand } from '/utils';
import {
  DEFAULT_SUFFIXES,
  LOGO_SHAPES,
  LOGO_SHAPES_LEN,
  COMPOSITION_OPTIONS,
  TEXT_TRANSFORM_OPTIONS
} from '/constants';

export default globalHook(React, {
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

  // variants
  composition: rand(COMPOSITION_OPTIONS),
  font: 'sans-serif',
  logoShape: rand(LOGO_SHAPES, LOGO_SHAPES_LEN),
  textTransform: rand(TEXT_TRANSFORM_OPTIONS),

  showTagline: true,
  showLogo: true
}, actions);
