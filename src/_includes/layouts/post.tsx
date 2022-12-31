import { ComponentChildren } from "npm:preact";
import Base from "./base.tsx";

type Props = {
  title: string;
  children: ComponentChildren;
};

const Post = ({ title, children }: Props) => {
  return (
    <Base title={title}>
      <article class="md-prose max-w-9/10 sm-(max-w-8/10) md:(max-w-6/10) lg:(max-w-5/10) xl:(max-w-4/10) mx-auto">
        {children}
      </article>
    </Base>
  );
};

export default Post;
