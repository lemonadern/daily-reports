// Note 👇:
// This file is not a config file for windicss like `windi.config.ts`, so windicss doesn't read this file.
// The configuration object (`windiConfig`) exported in this file is used by `_config.ts`.

import { defineConfig } from "https://esm.sh/windicss@3.5.6/helpers/index.js?dts";
// typography plugin is not hosted on esm.sh, npm is used instead.
import typography from "npm:windicss/plugin/typography";
import { FONT_FAMILY } from "./src/_constants/constants.ts";

export const windiConfig = defineConfig({
  theme: {
    extend: {
      fontFamily: {
        "title": [FONT_FAMILY, "cursive"],
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
        "color-tetora-live-dvd-head": "#745B80",
        "color-tetora-live-dvd-body": "#7475AE",
        "color-tetora-live-dvd-white": "#FCFDF8",
        "fresh-marine-blue": "#80c7d8",
        "fresh-marine-white": "#f0fbfd",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#333",
            a: {
              "color": "#3182ce",
              "word-break": "break-all",
              "text-decoration-line": "none",
              "&:hover": {
                color: "#2c5282",
                "text-decoration-line": "underline",
              },
            },
            ul: {
              li: {
                "padding-left": "1.5em",
                "&::before": {
                  "background-color": "#727272",
                },
                ul: {
                  li: {
                    "&::before": {
                      "border-radius": "0",
                    },
                    ul: {
                      li: {
                        "&::before": {
                          "border-radius": "50%",
                        },
                        ul: {
                          li: {
                            "&::before": {
                              "border-radius": "0",
                            },
                            ul: {
                              li: {
                                "&::before": {
                                  "border-radius": "50%",
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            code: {
              "background-color": "#e5e5e5",
              "padding-left": ".25rem",
              "padding-right": ".25rem",
              "padding-top": ".1rem",
              "padding-bottom": ".1rem",
            },
            p: {
              code: {
                "&::before": {
                  content: "none",
                },
                "&::after": {
                  content: "none",
                },
              },
            },
            sup: {
              a: {
                "word-break": "normal",
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
