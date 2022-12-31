import { ComponentChildren } from "npm:preact";
import { ArticleHeader } from "components/articleHeader.tsx";
import Base from "./base.tsx";

type Props = {
  title: string;
  date: string;
  children: ComponentChildren;
};

// wip

const Post = ({ title, date, children }: Props) => {
  return (
    <Base title={title}>
      <ArticleHeader title={title} date={date} />
      <article class="md-prose max-w-9/10 sm-(max-w-8/10) md:(max-w-6/10) lg:(max-w-5/10) xl:(max-w-4/10) mx-auto">
        {children}
      </article>
    </Base>
  );
};

export default Post;
