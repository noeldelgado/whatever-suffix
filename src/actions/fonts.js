const { count, log } = console;
import WebFont from 'webfontloader';
import { rand } from '/utils';

/**
 * Selects a random font from the `fonts` state registry and loads it
 * @async
 * @return <Promise>
 */
export const loadRandomFont = async (store) => {
  count('loadRandomFont')
  const { fonts, fontsLen } = store.state;
  const font = rand(fonts, fontsLen)?.family;

  return new Promise((resolve, reject) => {
    WebFont.load({
      classes: false,
      google: { families: [font] },
      active: () => {
        store.setState({ font });
        resolve();
      },
      fontinactive: (familyName) => {
        reject(new Error(`Font “${familyName}” cannot be loaded`));
      }
    });
  });
};
