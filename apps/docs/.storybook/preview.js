import React from "react";
import { useDarkMode } from "storybook-dark-mode";
import { DocsContainer } from './DocsContainer';

import { themes } from "@storybook/theming";
import Logo from "./assets/logo.png";
import LogoDark from "./assets/logo-dark.png";

import "@evoke-ui/core/dist/styles.css";

const evokeTheme = {
  brandTitle: "Evoke UI",
  brandUrl: "https://www.colpitts.dev",
  brandImage: "https://place-hold.it/350x150",
  brandTarget: "_blank",
};

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: "^on.*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  //layout: 'fullscreen',
  darkMode: {
    classTarget: "html",
    darkClass: "dark",
    lightClass: "light",
    stylePreview: true,
    // Override the default dark theme
    dark: {
      ...themes.dark,
      ...evokeTheme,
      brandImage: LogoDark,
      appContentBg: "#232628", // override main story view frame
      barBg: "#202020",
    },
    // Override the default light theme
    light: {
      ...themes.normal,
      ...evokeTheme,
      brandImage: Logo,
      appContentBg: "#f6f7f7", // override main story view frame
      barBg: "#f5f5f7",
    },
  },
  options: {
    storySort: {
      order: ["Welcome", "Atoms", ["Typography"], "Molecules", "Organisms"],
    },
  },
  docs: {
    // theme: themes.dark,
    container: DocsContainer,
  },
};
