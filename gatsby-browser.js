import React from 'react';
import {ThemeProvider, createGlobalStyle} from 'styled-components';
import Theme from './src/themes/theme.js';

const GlobalStyles = createGlobalStyle`

  @mixin font-face($jmeno, $soubor) {
    @font-face {
        font-family: $jmeno; /* deklarace fontu */
        src: url("./assets/fonts/#{$soubor}"); /* propojení na umístění souboru */
    }
  }


  @include font-face("AveBlack", "Avenir-Black.ttf");
  @include font-face("AveBlackOblique", "Avenir-BlackOblique.ttf");
  @include font-face("AveBook", "Avenir-Book.ttf");
  @include font-face("AveBookOblique", "Avenir-BookOblique.ttf");
  @include font-face("AveHeavy", "Avenir-Heavy.ttf");
  @include font-face("AveHeavyOblique", "Avenir-HeavyOblique.ttf");
  @include font-face("AveLight", "Avenir-Light.ttf");
  @include font-face("AveLightOblique", "Avenir-LightOblique.ttf");
  @include font-face("AveMedium", "Avenir-Medium.ttf");
  @include font-face("AveMediumOblique", "Avenir-MediumOblique.ttf");
  @include font-face("AveOblique", "Avenir-Oblique.ttf");
  @include font-face("AveRoman", "Avenir-Roman.ttf");

  h1, h2, h3, h4, h5, p, span, a, li, div {
    font-weight: normal !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: Avenir-Medium;
    outline: none;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0 !important;
  }

  div:active {
    outline: none !important;
  }

  a:active {
    outline: none !important;
  }

  html {
    overflow-x: hidden;
    position: relative;
  }

  body {
    width: 100%;
    overflow-x: hidden;
    position: relative;
    background: #EDEDED;
  }

  img {
    max-width: 100%;
  }

  a {
    display: block;
  }
`;

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
);
