import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx_preact.ts";
import windi_css from "lume/plugins/windi_css.ts";
const site = lume({
  src: "./src",
});

site.use(jsx())
  .use(windi_css());

site.copy([".png", ".jpg", ".gif", ".svg"]);

export default site;
