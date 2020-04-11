import WordList from 'word-list/words.txt';
import { rand } from '/utils';
const { ceil, floor, random } = Math;

const internals = {
  /**
   * Returns a random interger between two values, inclusive
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
   */
  getRandomIntInclusive(min, max) {
    min = ceil(min);
    max = floor(max);
    return floor(random() * (max - min + 1)) + min;
  }
};

/**
 * Fetches words.txt file and updates the state.words with the result as an array
 * @async
 */
export async function fetchWords(store) {
  const wordsRes = await fetch(WordList, { cache: 'force-cache' });
  const wordsData = await wordsRes.text();
  const words = wordsData.split('\n');
  store.setState({ words, wordsLen: words.length });
}

/**
 * Selects a random word from the state.words registry array
 * @return {string} word - random word from registry
 */
export function getRandomWord(store) {
  const { words, wordsLen } = store.state;
  return rand(words, wordsLen);
}

/**
 * Selects n random words from the state.words registry array and joins them a single string
 * @param length {[number=3..4]} - total words to return
 * @return {string} tagline - radndom words from registry
 */
export function getRandomTagline(store, length = internals.getRandomIntInclusive(3, 4)) {
  const { words, wordsLen } = store.state;
  return Array.from({ length }, () => rand(words, wordsLen)).join(' ');
}
