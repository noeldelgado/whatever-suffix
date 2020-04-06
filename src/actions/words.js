const { log, error } = console;
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
  try {
    const wordsRes = await fetch(WordList, { cache: 'force-cache' });
    const wordsData = await wordsRes.text();
    const words = wordsData.split('\n');
    store.setState({ words, wordsLen: words.length });
  }
  catch(err) {
    throw err;
  }
};

/**
 * Selects a random word from the state.words registry array and sets it as the
 * state.mainWord value
 */
export function setRandomWord(store) {
  const { words, wordsLen } = store.state;
  const mainWord = rand(words, wordsLen);
  store.setState({ mainWord });
};

/**
 * Selects n random words from the state.words registry array, concatenates them
 * and sets it as the state.tagline value
 * @params {Number} [length=2..4] - number of words the tagline shold be composed from
 */
export function setRandomTagline(store, length = internals.getRandomIntInclusive(2, 4)) {
  const { words, wordsLen } = store.state;
  const tagline = Array.from({ length }, () => rand(words, wordsLen)).join(' ');
  store.setState({ tagline });
};
