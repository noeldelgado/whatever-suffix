import React, { useEffect, useState, Fragment } from 'react';
import { Box, CircularProgress, Fab, Fade, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { Refresh } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';

import Header from '/components/Header';
import Logo from '/components/Logo';
import Text from '/components/Text';
import Tagline from '/components/Tagline';
import Footer from '/components/Footer';
import { capitalize } from '/utils';
import useGlobal from '/store';

import styles from './App.module.css';

const useStyles = makeStyles((theme) => ({
  fab: {
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
  const [composition] = useGlobal(state => state.composition);

  const [initialStateReady, setInitialStateReady] = useState(false);
  const [layoutClass, setLayoutClass] = useState('');
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

  useEffect(() => {
    setLayoutClass(`layoutComposition${capitalize(composition)}`);
  }, [composition]);

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
      display='flex'
      flex='1'
      flexDirection='column'
      position='relative'
      bgcolor='var(--app-color-main)'
      color='var(--app-color-text)'
    >
      <Header/>
      <Box
        component='main'
        display='flex'
        flex={1}
        flexDirection={composition}
        alignItems='center'
        justifyContent='center'
        pt={4}
        px={1}
        pb={6}
        className={styles[layoutClass]}
      >
        {initialStateReady &&
          <Fragment>
            <Box className={styles.logoSymbol}>
              <Logo/>
            </Box>
            <Box className={styles.logoTextContainer}>
              <Text/>
              <Tagline className={styles.logoTagline}/>
            </Box>
          </Fragment>
        }
      </Box>
      <Footer/>
      <Fab
        onClick={newCombination}
        disabled={fetching}
        aria-label="random combination"
        style={{position: 'absolute'}}
        className={classes.fab}
      >
        <Refresh/>
      </Fab>
      <Fade in={fetching}>
        <Box className={styles.loader}>
          <CircularProgress
            color='inherit'
            size={32}
          />
        </Box>
      </Fade>
      <Snackbar
        open={error}
        autoHideDuration={6000}
        onClose={() => globalActions.app.setError(false)}
      >
        <Alert
          elevation={6}
          variant='filled'
          severity='error'
        >
          {errorMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default App;
