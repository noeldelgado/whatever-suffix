import SafeColor from 'safecolor';
import { rand } from '/utils';
import {
  LOGO_SHAPES,
  LOGO_SHAPES_LEN,
  TEXT_TRANSFORM_OPTIONS,
  COMPOSITION_OPTIONS
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
  },

  /**
   * Genetates a random color combination and updates global CSS variables
   */
  setRandomColorsCombination() {
    const mainColor = new SafeColor().random();
    const textColor = new SafeColor({
      color: internals.getColorComponent(mainColor)
    }).random();

    document.documentElement.style.setProperty('--app-color-main', mainColor);
    document.documentElement.style.setProperty('--app-color-text', textColor);
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

/**
 * Generates a whole new random combination
 * - sets and loads a new random font
 * - generates a new random color combination
 * - sets a random logo shape
 * - sets a random word
 * - sets a random tagline
 */
export async function newCombination(store) {
  let font = store.state.font;
  store.actions.app.loading();

  try {
    font = await store.actions.fonts.loadRandomFont();
  }
  finally {
    internals.setRandomColorsCombination();
    store.setState({
      font: font,
      mainWord: store.actions.words.getRandomWord(),
      tagline: store.actions.words.getRandomTagline(),
      composition: rand(COMPOSITION_OPTIONS),
      textTransform: rand(TEXT_TRANSFORM_OPTIONS),
      logoShape: rand(LOGO_SHAPES, LOGO_SHAPES_LEN),
      fetching: false
    });
  }
}
