module.exports = {
  stories: [
    "../stories/**/*.stories.@(mdx|ts|tsx)",
    "../../../packages/evoke-ui-core/src/**/*.stories.@(mdx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-dark-mode",
    "@storybook/addon-a11y",
    "@storybook/theming",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
};
