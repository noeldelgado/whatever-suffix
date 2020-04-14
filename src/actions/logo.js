import { LOGO_SHAPES, LOGO_SHAPES_LEN } from '/constants';
import { rand } from '/utils';

export function show(store, showLogo=true) {
  store.setState({ showLogo });
}

export function getRandom() {
  return rand(LOGO_SHAPES, LOGO_SHAPES_LEN);
}
