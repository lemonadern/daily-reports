import { dateStringFormatter } from "../_utils/dateStringFormatter.ts";

type Props = {
  title: string;
  date: string;
};

// wip

export const ArticleHeader = ({ title, date }: Props) => (
  <header class="flex flex-col items-center gap-4 py-16">
    <h1 class="text-3xl font-extrabold">
      {dateStringFormatter(date)}
    </h1>
    <p class="text-md text-opacity-60">ここにサブタイトルを記入</p>
  </header>
);
