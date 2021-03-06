import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    box-sizing: border-box;
    min-height: 100%;
  }

  #root {
    min-height: 100%;
  }

  * {
    box-sizing: inherit;
  }

  button {
    outline: none;
    border: none;
    background: none;
    font-size: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`