const { mergeConfig } = require('vite');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  viteFinal: (config) => {
    const overrides  = {}
    if (config.build) {
      overrides.base = "/vite-storybook-example"
    }

    return mergeConfig(config, overrides);
  }
}
