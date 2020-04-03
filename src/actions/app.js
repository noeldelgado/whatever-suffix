import SafeColor from 'safecolor';
import { rand } from '/utils';

const internals = {
  LOGOSHAPES: ['rect', 'circle'],
  colorComponentRe: new RegExp(/[^\d,]/g),
  /**
   * Transforms a CSS {rgb|hsl} color string into a color component
   * @param {String] str
   * @return Array[Number] e.g.: [255, 255, 255]
   */
  getColorComponent(str) {
    return str.replace(this.colorComponentRe, '').split(',');
  }
};

/**
 * Updates state.fetching
 * @param {Bool} [fetching=true]
 */
export const loading = (store, bool = true) =>
  store.setState({ fetching: bool });

/**
 * Updates state.suffix
 * @param {string} suffix
 */
export const setSuffix = (store, suffix) =>
  store.setState({ suffix });

/**
 * Updates state{error, errorMessage}
 * @param {Bool} [error=true]
 * @param {string} [message='Unknown error']
 */
export const setError = (store, error = true, message = 'Unknown error') => {
  if (!error) return store.setState({ error });
  store.setState({ error, errorMessage: message });
};

export const setRandomLogoShape = (store) =>
  store.setState({ logoShape: rand(internals.LOGOSHAPES) });

/**
 * Genetates a random color combination and updates global CSS variables
 */
export const setRandomColorsCombination = () => {
  const mainColorString = new SafeColor().random();
  const textColor = new SafeColor({
    color: internals.getColorComponent(mainColorString)
  }).random();

  document.documentElement.style.setProperty('--app-color-main', mainColorString);
  document.documentElement.style.setProperty('--app-color-text', textColor);
};

/**
 * Generates a whole new random combination
 * - sets and loads a new random font
 * - generates a new random color combination
 * - sets a new random word
 */
export const newCombination = async (store) => {
  store.actions.app.loading();
  try {
    await store.actions.fonts.loadRandomFont();
    store.actions.app.setRandomColorsCombination();
    store.actions.words.setRandomWord();
    store.actions.words.setRandomTagline();
    store.actions.app.setRandomLogoShape();
  }
  finally {
    store.actions.app.loading(false);
  }
};
