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
    if (config.build && process.env.STORYBOOK_BASE_DIR) {
      overrides.base = process.env.STORYBOOK_BASE_DIR
    }

    return mergeConfig(config, overrides);
  }
}
