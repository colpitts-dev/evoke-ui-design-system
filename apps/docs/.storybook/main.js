module.exports = {
  stories: [
    "../stories/**/*.stories.@(mdx|ts|tsx)",
    "../../../packages/evoke-ui-core/src/**/*.stories.@(mdx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-docs",
    "@storybook/addon-links",
    "@storybook/addon-a11y",
    "@storybook/theming",
    "storybook-dark-mode/register",
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
