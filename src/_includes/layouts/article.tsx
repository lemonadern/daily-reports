import { ComponentChildren } from "npm:preact";
import Base from "./base.tsx";
import { ArticleSection } from "components/articleSection.tsx";
import { ArticleHeader } from "components/articleHeader.tsx";

type Props = {
  title: string;
  published_at: string;
  children: ComponentChildren;
};

const ReportLayout = ({ title, published_at, children }: Props) => {
  return (
    <Base title={title}>
      <div class="h-1/1">
        <ArticleHeader title={title} published_at={published_at} />
        <ArticleSection>
          {children}
        </ArticleSection>
      </div>
    </Base>
  );
};

export default ReportLayout;
