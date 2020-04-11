import WebFont from 'webfontloader';
import { rand } from '/utils';

/**
 * Loads a font from Google Fonts
 * @param {string} family - font family name
 * @return {Promise<string|Error>}
 */
export function loadFont(store, family) {
  if (!family) throw new Error('No FontFamilyName given');
  return new Promise((resolve, reject) => {
    WebFont.load({
      classes: false,
      google: { families: [family] },
      active: () => resolve(family),
      fontinactive: (familyName) => reject(new Error(`Font “${familyName}” cannot be loaded`))
    });
  });
}

/**
 * Selects a random font from the `fonts` state registry, loads it and sets
 * state.font if resolved
 * @async
 * @return {Promise<string|Error>}
 */
export async function loadRandomFont(store) {
  const { fonts, fontsLen } = store.state;
  const font = rand(fonts, fontsLen)?.family;
  return await store.actions.fonts.loadFont(font);
}
