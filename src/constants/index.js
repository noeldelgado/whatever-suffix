import React from 'react';
import { version } from '/../package.json';

export const VERSION = version;

export const DEFAULT_SUFFIXES = [
  '.js',
  'script',
  '.io'
];

export const LOGO_SHAPES = [
  {
    name: 'circle',
    path: <circle cx='50' cy='50' r='50'/>
  },
  {
    name: 'rectRounded4',
    path: <rect width='100' height='100' rx='4' ry='4'/>
  },
  {
    name: 'polygonRounded20',
    path: <path d="M60.0656966,2.58380557 L86.1313931,17.6328425 C92.3194147,21.2054984 96.1313931,27.8080388 96.1313931,34.9533506 L96.1313931,65.0514244 C96.1313931,72.1967362 92.3194147,78.7992766 86.1313931,82.3719325 L60.0656966,97.4209694 C53.877675,100.993625 46.2537181,100.993625 40.0656966,97.4209694 L14,82.3719325 C7.81197846,78.7992766 4,72.1967362 4,65.0514244 L4,34.9533506 C4,27.8080388 7.81197846,21.2054984 14,17.6328425 L40.0656966,2.58380557 C46.2537181,-0.988850329 53.877675,-0.988850329 60.0656966,2.58380557 Z" id="Polygon"></path>
  }
];
export const LOGO_SHAPES_LEN = LOGO_SHAPES.length;
