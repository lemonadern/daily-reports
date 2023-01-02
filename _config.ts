import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx_preact.ts";
import windi_css from "lume/plugins/windi_css.ts";
import date from "lume/plugins/date.ts";

import { SITE_URL } from "./src/_constants/constants.ts";

import { windiConfig } from "./windi_config.ts";

const site = lume({
  src: "./src",
  location: new URL(SITE_URL),
});

site.use(jsx())
  .use(windi_css({ config: windiConfig }))
  .use(date());

site.copy([".png", ".jpg", ".gif", ".svg", ".webp"]);

export default site;
