# whatever suffix
Random word-based-app inspired by [@freezydorito]’s [@WhateverScript] twitter bot.

It uses [sindresorhus/word-list] package to randomly select English words from the [Letterpress Word List] with over 274,925 entries.

https://noeldelgado.github.io/whatever-suffix/

![screenshot](./screen-shot.png)

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

## Credits
- Idea [@WhateverScript]
- Collection of English words using [sindresorhus/word-list]
- Material Design, Icons and Fonts by [@Google]
- [Material-UI] react components by [Call-Em-All]
- Color combinations using [jessuni/SafeColor]
- [malte-wessel/react-textfit] to ensure the text is kept on a single line
- Build using [Parcel] bundler (babel, react, postcss-modules)

## License
MIT © [Noel Delgado](http://pixelia.me/)

[@freezydorito]: https://twitter.com/freezydorito
[@WhateverScript]: https://twitter.com/WhateverScript
[sindresorhus/word-list]: https://github.com/sindresorhus/word-list
[Letterpress Word List]: https://github.com/atebits/Words/blob/master/Words/en.txt
[@Google]: https://twitter.com/Google
[Material-UI]: https://github.com/mui-org/material-ui
[Call-Em-All]: https://github.com/mui-org
[jessuni/SafeColor]: https://github.com/jessuni/SafeColor
[malte-wessel/react-textfit]: https://github.com/malte-wessel/react-textfit
[Parcel]: https://parceljs.org/
