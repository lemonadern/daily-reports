import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx_preact.ts";
import windi_css from "lume/plugins/windi_css.ts";

import { windiConfig } from "./windi_config.ts";

const site = lume({
  src: "./src",
});

site.use(jsx())
  .use(windi_css({ config: windiConfig }));

site.copy([".png", ".jpg", ".gif", ".svg", ".webp"]);

export default site;
