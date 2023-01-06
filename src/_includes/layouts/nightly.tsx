import { ComponentChildren } from "npm:preact";
import { NightlyHeader } from "components/nightlyHeader.tsx";
import Base from "./base.tsx";

type Props = {
  title: string;
  overview: string;
  children: ComponentChildren;
};

const Nightly = ({ title, overview, children }: Props) => {
  return (
    <Base title={title + " nightly"}>
      <div class="h-1/1">
        <NightlyHeader overview={overview} title={title} />
        <article class="md-prose max-w-1/1 px-8 py-8  sm:(max-w-8/10 rounded-xl) md:(max-w-7/10) lg:(max-w-6/10 p-12) xl:(max-w-5/10 p-16) mx-auto bg-white">
          {children}
        </article>
      </div>
    </Base>
  );
};

export default Nightly;
