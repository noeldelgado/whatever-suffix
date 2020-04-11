import shapes from './LogoShapes';
import { version } from '/../package.json';

export const VERSION = version;

export const DEFAULT_SUFFIXES = [
  '.js',
  'script',
  '.io'
];

export const LOGO_SHAPES = shapes;
export const LOGO_SHAPES_LEN = shapes.length;

export const TEXT_TRANSFORM_OPTIONS = [
  'lowercase',
  'uppercase',
  'capitalize'
];

export const COMPOSITION_OPTIONS = [
  'column',
  'row'
];
