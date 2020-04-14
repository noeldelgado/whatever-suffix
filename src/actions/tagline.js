const { ceil, floor, random } = Math;
import { rand } from '/utils';

const internals = {
  /**
   * Returns a random interger between two values, inclusive
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
   */
  getRandomIntInclusive(min = ceil(min), max = floor(max)) {
    return floor(random() * (max - min + 1)) + min;
  }
};

/**
 * Updates state.showTagline
 * @param {bool} [showTagline=true]
 */
export function show(store, showTagline=true) {
  store.setState({ showTagline });
}

/**
 * Selects n random words from the state.words registry array and joins them a single string
 * @param length {[number=3..4]} - total words to return
 * @return {string} tagline - radndom words from registry
 */
export function getRandom(store, length = internals.getRandomIntInclusive(3, 4)) {
  const { words, wordsLen } = store.state;
  return Array.from({ length }, () => rand(words, wordsLen)).join(' ');
}
