import { themes } from "@storybook/theming";
import "@evoke-ui/core/dist/styles.css";

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: "^on.*" },
  //layout: 'fullscreen',
  darkMode: {
    classTarget: "html",
    darkClass: "dark",
    lightClass: "light",
    stylePreview: true,
    // Override the default dark theme
    dark: {
      ...themes.dark,
      appContentBg: "#232628", // override main story view frame
      barBg: "#202020",
    },
    // Override the default light theme
    light: {
      ...themes.normal,
      appContentBg: "#f6f7f7", // override main story view frame
      barBg: "#f5f5f7",
    },
  },
  options: {
    storySort: {
      order: ["Welcome", "Atoms", "Molecules", "Organisms"],
    },
  },
};
