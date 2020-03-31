import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from '/components/App';

const theme = {
  palette: {
    background: {
      default: 'var(--app-color-bg)'
    }
  }
};

ReactDOM.render(
  <ThemeProvider theme={createMuiTheme(theme)}>
    <CssBaseline/>
    <App/>
  </ThemeProvider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
