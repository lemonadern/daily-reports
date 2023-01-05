import lume from "lume/mod.ts";
import basePath from "lume/plugins/base_path.ts";
import relativeUrls from "lume/plugins/relative_urls.ts";
import resolveUrls from "lume/plugins/resolve_urls.ts";
import metas from "lume/plugins/metas.ts";
import jsx from "lume/plugins/jsx_preact.ts";
import windi_css from "lume/plugins/windi_css.ts";
import date from "lume/plugins/date.ts";
import katex from "lume/plugins/katex.ts";

import { SITE_URL } from "./src/_constants/constants.ts";

import { windiConfig } from "./windi_config.ts";
import { markdownItConfig } from "./markdown_config.ts";

const site = lume({
  src: "./src",
  location: new URL(SITE_URL),
}, { markdown: markdownItConfig });

site.use(basePath())
  .use(relativeUrls())
  .use(resolveUrls())
  .use(metas())
  .use(jsx())
  .use(windi_css({ config: windiConfig }))
  .use(date())
  .use(katex());

site.copy([".png", ".jpg", ".gif", ".svg", ".webp"]);

export default site;
