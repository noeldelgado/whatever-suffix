module.exports = {
  plugins: {
    'posthtml-expressions': {
      locals: {
        NAME: process.env.NAME,
        DESCRIPTION: process.env.DESCRIPTION
      }
    }
  }
};
