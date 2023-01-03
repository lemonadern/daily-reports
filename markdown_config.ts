import emoji from "npm:markdown-it-emoji";
import footnote from "npm:markdown-it-footnote";
import linkAttr from "npm:markdown-it-link-attributes";

export const markdownItConfig = {
  plugins: [emoji, footnote, [linkAttr, {
    // deno-lint-ignore no-explicit-any
    matcher(href: any) {
      return href.startsWith("https:");
    },
    attrs: {
      target: "_blank",
      rel: "noopener noreferrer",
    },
  }]],
  keepDefaultPlugins: true,
  options: {
    html: true,
    linkify: true,
    typographer: true,
  },
};
