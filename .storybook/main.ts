import reactDocgenTypescript from "@joshwooding/vite-plugin-react-docgen-typescript";
import type { StorybookConfig } from "@storybook/react-vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import path from "node:path";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../packages/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-controls",
    "@storybook/addon-interactions",
  ],

  core: {
    builder: "@storybook/builder-vite",
  },

  framework: {
    name: "@storybook/react-vite",
    options: {
      builder: {},
    },
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      tsconfigPath: path.resolve(
        __dirname,
        "../packages/vapor-core/tsconfig.json"
      ),
    },
  },

  viteFinal: async (config) => {
    const mergedConfig = mergeConfig(config, {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          // ...convertTsConfigPathsToWebpackAliases(),
          "~": path.resolve(__dirname, "../packages/vapor-core/src"),
        },
      },
      plugins: [vanillaExtractPlugin(), reactDocgenTypescript()],
    });

    return mergedConfig;
  },
};

export default config;
