import { ComponentChildren } from "npm:preact";
import { ReportHeader } from "components/reportHeader.tsx";
import Base from "./base.tsx";
import { ArticleSection } from "components/articleSection.tsx";

type Props = {
  title: string;
  overview: string;
  page_type: string | undefined;
  children: ComponentChildren;
};

const ReportLayout = ({ title, overview, page_type, children }: Props) => {
  return (
    <Base title={title + " " + (page_type === undefined ? "" : page_type)}>
      <div class="h-1/1">
        <ReportHeader title={title} subtitle={overview} />
        <ArticleSection>
          {children}
        </ArticleSection>
      </div>
    </Base>
  );
};

export default ReportLayout;
