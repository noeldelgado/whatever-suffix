const { count } = console;

import React, { useEffect, useState, Fragment } from 'react';
import { Box, CircularProgress, Fab, Fade, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { Refresh } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';

import Header from '/components/Header';
import Logo from '/components/Logo';
import Text from '/components/Text';
import Footer from '/components/Footer';
import useGlobal from '/store';

import styles from './App.module.css';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    [theme.breakpoints.down('sm')]: {
      bottom: theme.spacing(2)
    },
    [theme.breakpoints.up('md')]: {
      bottom: theme.spacing(3)
    }
  },
}));

const App = () => {
  const [fetching, globalActions] = useGlobal(state => state.fetching);
  const [error] = useGlobal(state => state.error);
  const [errorMessage] = useGlobal(state => state.errorMessage);
  const [initialStateReady, setInitialStateReady] = useState(false);
  const classes = useStyles();

  useEffect(function setInitialLoadState() {
    (async() => {
      try { await globalActions.fonts.loadFont('Roboto:300,400,500,700&display=swap'); }
      catch (err) { /**/ }

      try {
        await globalActions.words.fetchWords();
        await globalActions.app.newCombination();
      }
      catch (err) {
        globalActions.app.setError(true, err.message);
      }
      finally {
        globalActions.app.loading(false);
        setInitialStateReady(true);
      }
    })();
  }, [globalActions.app, globalActions.words, globalActions.fonts]);

  async function newCombination() {
    try {
      await globalActions.app.newCombination();
    }
    catch (err) {
      globalActions.app.setError(true, err.message);
    }
  }

  return (
    <Box
      className={styles.app}
      position='relative'
      bgcolor='var(--app-color-main)'
      color='var(--app-color-text)'
    >
      <Header/>
      <Box component='main' className={styles.main}>
        {initialStateReady &&
          <Fragment>
            <Logo/>
            <Text/>
          </Fragment>
        }
      </Box>
      <Footer/>
      <Fab
        className={classes.fab}
        onClick={newCombination}
        disabled={fetching}
        aria-label="random combination"
      >
        <Refresh/>
      </Fab>
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
