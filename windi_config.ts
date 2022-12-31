// Note 👇:
// This file is not a config file for windicss like `windi.config.ts`, so windicss doesn't read this file.
// The configuration object (`windiConfig`) exported in this file is used by `_config.ts`.

import { defineConfig } from "https://esm.sh/windicss@3.5.6/helpers/index.js?dts";
// typography plugin is not hosted on esm.sh, npm is used instead.
import typography from "npm:windicss/plugin/typography";

export const windiConfig = defineConfig({
  theme: {
    extend: {
      fontFamily: {
        "title": ["Fugaz One", "cursive"],
      },
      colors: {
        "color-kakuitsu-primary": "#657664",
        "color-kakuitsu2-primary": "#415740",
        "color-kakuitsu-secondary": "#F3FAF3",
        "color-octoammo-primary": "#CCAF87",
        "color-hakanai-tour-primary": "#413839",
        "color-hakanai-tour-secondary": "#FDFDFD",
        "color-tetora-dec-primary": "#9A86BA",
        "color-tetora-dec-secondary": "#A08ABE",
        "color-tetora-dec-tertiary": "#FCF8FE",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#333",
            a: {
              "color": "#3182ce",
              "&:hover": {
                color: "#2c5282",
              },
            },
          },
        },
      },
    },
  },
  plugins: [typography({
    className: "md-prose",
  })],
});
