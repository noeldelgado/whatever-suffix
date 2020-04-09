import SafeColor from 'safecolor';
import { rand } from '/utils';
import {
  LOGO_SHAPES,
  LOGO_SHAPES_LEN,
  TEXT_TRANSFORM_OPTIONS
} from '/constants';

const internals = {
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
export function loading(store, bool = true) {
  store.setState({ fetching: bool });
}

/**
 * Updates state.suffix
 * @param {string} suffix
 */
export function setSuffix(store, suffix) {
  store.setState({ suffix });
}

/**
 * Updates state{error, errorMessage}
 * @param {Bool} [error=true]
 * @param {string} [message='Unknown error']
 */
export function setError(store, error = true, message = 'Unknown error') {
  if (!error) return store.setState({ error });
  store.setState({ error, errorMessage: message });
}

export function setRandomLogoShape(store) {
  store.setState({ logoShape: rand(LOGO_SHAPES, LOGO_SHAPES_LEN) });
}

export function setRandomTextTransform(store) {
  store.setState({ textTrasform: rand(TEXT_TRANSFORM_OPTIONS) });
}

/**
 * Genetates a random color combination and updates global CSS variables
 */
export function setRandomColorsCombination() {
  const mainColorString = new SafeColor().random();
  const textColor = new SafeColor({
    color: internals.getColorComponent(mainColorString)
  }).random();

  document.documentElement.style.setProperty('--app-color-main', mainColorString);
  document.documentElement.style.setProperty('--app-color-text', textColor);
}

/**
 * Generates a whole new random combination
 * - sets and loads a new random font
 * - generates a new random color combination
 * - sets a random logo shape
 * - sets a random word
 * - sets a random tagline
 */
export async function newCombination(store) {
  store.actions.app.loading();
  try {
    await store.actions.fonts.loadRandomFont();
  }
  finally {
    store.actions.app.setRandomColorsCombination();
    store.actions.app.setRandomTextTransform();
    store.actions.app.setRandomLogoShape();
    store.actions.words.setRandomWord();
    store.actions.words.setRandomTagline();
    store.actions.app.loading(false);
  }
}
