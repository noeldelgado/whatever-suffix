const { count } = console;

import React, { useEffect, useState, Fragment } from 'react';
import { Box, CircularProgress, Fade, IconButton, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { Refresh } from '@material-ui/icons';

import Header from '/components/Header';
import Logo from '/components/Logo';
import Text from '/components/Text';
import Footer from '/components/Footer';
import useGlobal from '/store';

import styles from './App.module.css';

const App = () => {
  const [globalState, globalActions] = useGlobal();
  const [ready, setReady] = useState(false);
  const [, setToggle] = useState(true);
  const { fetching, error, errorMessage } = globalState;

  useEffect(function setInitialLoadState() {
    globalActions.app.loading();

    (async() => {
      try {
        await globalActions.words.fetchWords();
        await globalActions.app.newCombination();
      }
      catch (err) {
        globalActions.app.setError(true, err.message);
      }
      finally {
        globalActions.app.loading(false);
        setReady(true);
      }
    })();

    const id = setInterval(() => {
      count('x');
      setToggle(toggle => !toggle);
    }, 2000);

    return () => clearInterval(id);
  }, [globalActions.app, globalActions.words]);

  async function newCombination() {
    try {
      await globalActions.app.newCombination();
    }
    catch (err) {
      globalActions.app.setError(true, err.message);
    }
  };

  return (
    <Box className={styles.app} bgcolor='var(--app-color-main)' color='var(--app-color-text)'>
      <Header/>
      <Box component='main' className={styles.main}>
        {ready &&
          <Fragment>
            <Logo/>
            <Text/>
            <IconButton
              style={{padding: '12px', borderRadius: '50%'}}
              onClick={newCombination}
              disabled={fetching}
              color='default'
              aria-label="new random combination"
            >
              <Refresh/>
            </IconButton>
          </Fragment>
        }
      </Box>
      <Footer/>
      <Fade in={fetching}>
        <Box className={styles.loader}>
          <CircularProgress color='inherit' size={32}/>
        </Box>
      </Fade>
      <Snackbar
        open={error}
        autoHideDuration={6000}
        onClose={() => globalActions.app.setError(false)}
      >
        <Alert elevation={6} variant='filled' severity='error'>
          {errorMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default App;
