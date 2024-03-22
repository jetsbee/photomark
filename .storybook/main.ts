import type { StorybookConfig } from "@storybook/nextjs";
import path from "node:path";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  core: {
    disableTelemetry: true, // Disables telemetry
  },
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public"],
  webpackFinal: async (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        "@": path.resolve(__dirname, "../"),
      }, // Ref. https://github.com/storybookjs/storybook/issues/11989#issuecomment-715524391
    },
  }),
};
export default config;
