import React, { useEffect, useState } from 'react';
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
import useStore from '/store';
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
  const [{ fetching, error, errorMessage, composition }, actions] = useStore(state => ({
    fetching: state.fetching,
    error: state.error,
    errorMessage: state.errorMessage,
    composition: state.composition
  }));

  const [initialStateReady, setInitialStateReady] = useState(false);
  const [layoutClass, setLayoutClass] = useState('');
  const classes = useStyles();

  useEffect(function setInitialLoadState() {
    (async() => {
      try { await actions.fonts.loadFont('Roboto:300,400,500,700&display=swap'); }
      catch (err) { /**/ }

      try {
        await actions.words.fetchWords();
        await actions.app.generateNewCombination();
      }
      catch (err) {
        actions.app.setError(true, err.message);
      }
      finally {
        actions.app.loading(false);
        setInitialStateReady(true);
      }
    })();
  }, [actions.app, actions.words, actions.fonts]);

  useEffect(() => {
    setLayoutClass(`layoutComposition${capitalize(composition)}`);
  }, [composition]);

  async function newCombination() {
    try {
      await actions.app.generateNewCombination();
    }
    catch (err) {
      actions.app.setError(true, err.message);
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
        alignItems='center'
        justifyContent='center'
        pt={4}
        px={1}
        pb={6}
        className={styles[layoutClass]}
      >
        {initialStateReady &&
          <Box className={styles.logoWrapper}>
            <Logo className={styles.logoSymbol}/>
            <Box className={styles.logoTextContainer}>
              <Text className={styles.logoText}/>
              <Tagline className={styles.logoTagline}/>
            </Box>
          </Box>
        }
      </Box>
      <Footer/>
      <Fab
        onClick={newCombination}
        disabled={fetching}
        aria-label='random combination'
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
        onClose={() => actions.app.setError(false)}
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
