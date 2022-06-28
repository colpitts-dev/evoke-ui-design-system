module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-evoke-ui`
  extends: ["evoke-ui"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
