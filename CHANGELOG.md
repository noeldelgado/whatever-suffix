# Changelog

## [Unreleased]

## [0.3.0] - [#3](../../pull/3) - 2020-04-14
### Added
- options/settings component
- add textTransform(lowercase, uppercase, capitalize) [`dc94514`](https://github.com/noeldelgado/whatever-suffix/commit/dc94514688b388ca32c5f2a1c2d4ddd2bc49a8fb)
- outlined logo shapes [`0ac09bb`](https://github.com/noeldelgado/whatever-suffix/commit/0ac09bb4dbc6a7e3ce68bc8fcffe6bd4c28e3daa)
- row,column logo variations [`a428ea2`](https://github.com/noeldelgado/whatever-suffix/commit/a428ea2a6d9bc7596879eb9de88fd7790f3a7a51)
- `postcss-nested` [`d215511`](https://github.com/noeldelgado/whatever-suffix/commit/d2155112da5f8d4be070d7adc09f9430661b90dd)
- `posthtml-expressions`
  - `.posthtmlrc.js`
  - use .env vars on index.html
- NAME,DESCRIPTION env vars

### Changed
- reduce # of store listeners [`d7d1636`](https://github.com/noeldelgado/whatever-suffix/commit/d7d163690930bbd8035ff02f8d0a20393b500f60)
- preconnect to google fonts origin [`5a022e6`](https://github.com/noeldelgado/whatever-suffix/commit/5a022e693007a3d0331eff698c4afac1fd764559)
- showTagline default false
- display info as dialog

### Removed
- “.io” from DEFAULT_SUFFIXES [`af3cfce`](https://github.com/noeldelgado/whatever-suffix/commit/af3cfce1c02ba5f43a8c9dcecbc2dc60e2705b8c)

## [0.2.0] - [#2](../../pull/2) - 2020-04-07
### Added
- random tagline
- polygon logo shape

### Changed
- [andregardi/use-global-hook](https://github.com/andregardi/use-global-hook) for state management
- replaced main IconButton with a Floating Action Button

### Removed
- @babel/plugin-proposal-function-bind

## [0.1.2] - 2020-03-31
### Fixed
- manifest `start_url`
- :lock: 'rel' attribute value include 'noreferrer' keyword
- :green_apple: 'apple-touch-icon' link element should not have 'sizes' attribute.

## [0.1.1] - [#1](../../pull/1) - 2020-03-31
### Added
- ℳ load Roboto font [`c4001d9`](https://github.com/noeldelgado/whatever-suffix/commit/c4001d9c0e4600f180a2e4e8e18f852a432e32a1)
- 🍱 favicons and PWA artifacts [`aea3f17`](https://github.com/noeldelgado/whatever-suffix/commit/aea3f17a4da65c1e1b7c1880c3953298dde2ea6c)

### Changed
- 📱 meta-viewport [`9a0b654`](https://github.com/noeldelgado/whatever-suffix/commit/9a0b654f0be54755c3fc7094af8dfb1e21802f5c)
  - 'viewport' meta element 'content' attribute value should not contain disallowed property 'minimum-scale'.
- ♿️ input label AA contrast [`c043541`](https://github.com/noeldelgado/whatever-suffix/commit/c043541d6cff16f1fdb295781bb60ce432e7dee4)

## [0.1.0] - 2020-03-30
### Added
- [Parcel](https://parceljs.org/) bundler (babel, react, postcss-modules)
- [Material-UI](https://github.com/mui-org/material-ui)
- [sindresorhus/word-list](https://github.com/sindresorhus/word-list) for English words list
- [jessuni/SafeColor](https://github.com/jessuni/SafeColor) for color combinations
- [malte-wessel/react-textfit](https://github.com/malte-wessel/react-textfit) to ensure the text is kept on a single line
- eslint
	- [.eslintrc](../blob/master/.eslintrc)
	- [.eslintignore](../blob/master/.eslintignore)
- [.editorconfig](../blob/master/.editorconfig)

[Unreleased]: https://github.com/noeldelgado/whatever-suffix/compare/v0.3.0...HEAD
[0.3.0]: https://github.com/noeldelgado/whatever-suffix/releases/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/noeldelgado/whatever-suffix/releases/compare/v0.1.2...v0.2.0
[0.1.2]: https://github.com/noeldelgado/whatever-suffix/releases/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/noeldelgado/whatever-suffix/releases/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/noeldelgado/whatever-suffix/releases/tag/v0.1.0
