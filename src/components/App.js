const { log } = console;

import React, { Component, Fragment } from 'react';
import { Box, CircularProgress, Fade, IconButton, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { Refresh } from '@material-ui/icons';
import WordList from 'word-list/words.txt';
import WebFont from 'webfontloader';
import SafeColor from 'safecolor';
import Header from '/components/Header';
import Logo from '/components/Logo';
import Text from '/components/Text';
import Footer from '/components/Footer';
import { rand } from '/components/utils';
import GoogleFontsList from '/data/google-fonts-list.json';
import styles from './App.module.css';

const internals = {
  SUFFIXES: [ '.js', 'script', '.io' ]
};

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fetching: true,
      words: [],
      wordsLen: 0,
      fonts: [],
      fontsLen: 0,
      fontPrimary: 'sans-serif',
      errorLoadingFont: false,
      errorLoadingFontName: null,
      text: null,
      suffix: rand(internals.SUFFIXES)
    };
  }

  async componentDidMount() {
    const wordsRes = await fetch(WordList, { cache: 'force-cache' });
    const wordsData = await wordsRes.text();
    const words = wordsData.split('\n');

    const fonts = GoogleFontsList.items;
    // const fontsRes = await fetch(`${internals.GOOGLE_FONTS.url}?key=${process.env.GOOGLE_FONTS_KEY}`);
    // const fontsData = await fontsRes.json();
    // const fonts = fontsData.items;

    log('words list:', words.length);
    log('google fonts list:', fonts.length);

    this.setState({
      words,
      wordsLen: words.length,
      fonts,
      fontsLen: fonts.length,
      fetching: false
    });

    this.loadRandomFonts();
  }

  loadRandomFonts() {
    const { fonts, fontsLen } = this.state;
    const font = (rand(fonts, fontsLen));

    this.setState({ fetching: true });

    WebFont.load({
      google: {
        families: [`${font.family}`]
      },
      classes: false,
      active: () => {
        this.setState({ fontPrimary: font.family });
        this.randomFontsLoaded();
      },
      inactive: (a, b, c) => {
        log('--- INACTIVE', a, b, c);
        this.setState({ errorLoadingFont: true, errorLoadingFontName: font.family });
        this.randomFontsLoaded();
      },
      fontinactive: (a, b, c) => {
        log('--- FONTINACTIVE', a, b, c);
        this.setState({ errorLoadingFont: true, errorLoadingFontName: font.family });
        this.randomFontsLoaded();
      }
    });
  }

  randomFontsLoaded() {
    const { words, wordsLen, suffix } = this.state;
    const text = rand(words, wordsLen);

    const bg = new SafeColor({
      color: [0, 0, 0],
      contrast: 4.5
    }).random();

    const tx = new SafeColor({
      color: bg.match(/\((.*?)\)/)[1].split(','),
      contrast: 4.5
    }).random(`${text}${suffix}`);

    document.documentElement.style.setProperty('--app-color-main', bg);
    document.documentElement.style.setProperty('--app-color-text', tx);

    this.setState({
      text,
      fetching: false
    });
  }

  render() {
    const { fetching, text, suffix, fontPrimary, errorLoadingFont, errorLoadingFontName } = this.state;

    return (
      <Box
        className={styles.app}
        bgcolor='var(--app-color-main)'
        color='var(--app-color-text)'
      >
        <Header
          suffix={suffix}
          onChange={(ev) => this.setState({ suffix: ev.currentTarget.value })}
        />
        <Box component='main' className={styles.main}>
          {text && (
            <Fragment>
              <Logo text={text} suffix={suffix}/>
              <Text text={text} suffix={suffix} fontPrimary={fontPrimary}/>
              <IconButton
                style={{padding: '12px', borderRadius: '50%'}}
                onClick={::this.loadRandomFonts}
                disabled={fetching}
                color='default'
                aria-label="new random combination"
              >
                <Refresh/>
              </IconButton>
            </Fragment>
          )}
        </Box>
        <Footer/>
        <Snackbar
          open={errorLoadingFont}
          autoHideDuration={6000}
          onClose={() => this.setState({ errorLoadingFont: false })}
        >
          <Alert elevation={6} variant='filled' severity='warning'>
            Font “{errorLoadingFontName}” could not be loaded
          </Alert>
        </Snackbar>
        <Fade in={fetching}>
          <Box className={styles.loader}>
            <CircularProgress color='inherit' size={32}/>
          </Box>
        </Fade>
      </Box>
    );
  }
}

export default App;
