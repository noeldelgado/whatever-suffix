# whatever suffix
https://noeldelgado.github.io/whatever-suffix/

![screenshot](./screen-shot.png)

Random word-based-app inspired by [@freezydorito]’s [@WhateverScript] twitter bot.

* Uses [sindresorhus/word-list] with 274,411 entries to randomly select English words from the [Letterpress Word List]. One-letter words are not included. Many common bad words are also filtered out.
* 987 [GoogleFonts] to randomly load fonts for every new combination.
* [jessuni/SafeColor] to generate accessible color combinations that complies with [WCAG 2.1 success criteria 1.4.3]
* Material Design, Icons and Fonts by [@Google]
* [Material-UI] react components by [Call-Em-All]
- Favicons generated using [favicon.io]
- Build using [Parcel] bundler

## Dev
### .env

```sh
cp .env.example .env
```

### start dev mode
Install the dependencies and start the development server on `localhost:1234`

```sh
npm install
npm start
```

## License
MIT © [Noel Delgado](http://pixelia.me/)

[@freezydorito]: https://twitter.com/freezydorito
[@WhateverScript]: https://twitter.com/WhateverScript
[sindresorhus/word-list]: https://github.com/sindresorhus/word-list
[Letterpress Word List]: https://github.com/atebits/Words/blob/master/Words/en.txt
[GoogleFonts]: https://fonts.google.com/
[WCAG 2.1 success criteria 1.4.3]: https://www.w3.org/WAI/WCAG21/quickref/#contrast-minimum
[@Google]: https://twitter.com/Google
[Material-UI]: https://github.com/mui-org/material-ui
[Call-Em-All]: https://github.com/mui-org
[jessuni/SafeColor]: https://github.com/jessuni/SafeColor
[malte-wessel/react-textfit]: https://github.com/malte-wessel/react-textfit
[Parcel]: https://parceljs.org/
[favicon.io]: https://favicon.io/favicon-converter/
