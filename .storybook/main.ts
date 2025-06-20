import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  "stories": ['../src/components/**/*.stories.@(ts|tsx)'],
  "addons": [
    "@storybook/preset-create-react-app",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-themes"
  ],
  "framework": {
    "name": "@storybook/react-webpack5",
    "options": {}
  },
  "staticDirs": [
    "../public"
  ]
};
export default config;