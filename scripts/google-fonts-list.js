#!/usr/bin/env node

const { log } = console;
const https = require('https');
const fs = require('fs');
require('dotenv').config();

const internals = {
  URL: `https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.GOOGLE_FONTS_KEY}`,
  outputFile: './src/data/google-fonts-list.json'
};

https.get(internals.URL, res => {
  let body = '';

  res
    .on('data', data => (body += data))
    .on('end', () => {
      fs.writeFile(internals.outputFile, body, 'utf8', (err) => {
        if (err) return log(err);
        log(`file saved: ${JSON.parse(body).items.length} items`);
      });
    });
});
