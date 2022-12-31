import { ComponentChildren } from "npm:preact";
import { NightlyHeader } from "components/nightlyHeader.tsx";
import Base from "./base.tsx";
import { dateStringFormatter } from "utils/dateStringFormatter.ts";

type Props = {
  date: string;
  overview: string;
  children: ComponentChildren;
};

const Nightly = ({ date, overview, children }: Props) => {
  const dateString = dateStringFormatter(date);
  return (
    <Base title={dateString + " nightly"}>
      <div class="h-1/1">
        <NightlyHeader overview={overview} date={dateString} />
        <article class="md-prose max-w-9/10 sm-(max-w-8/10) md:(max-w-6/10) lg:(max-w-5/10) xl:(max-w-4/10) mx-auto">
          {children}
        </article>
      </div>
    </Base>
  );
};

export default Nightly;
