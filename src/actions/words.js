import WordList from 'word-list/words.txt';
import { rand } from '/utils';

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
export function getRandom(store) {
  const { words, wordsLen } = store.state;
  return rand(words, wordsLen);
}
