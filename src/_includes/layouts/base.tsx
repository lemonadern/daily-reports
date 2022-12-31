import { ComponentChildren } from "npm:preact";
import { Header } from "components/header.tsx";
import { Footer } from "components/footer.tsx";

type Props = {
  title: string;
  children: ComponentChildren;
};

const Base = ({ title, children }: Props) => {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
      </head>
      <body class="min-h-screen grid grid-rows-[min-content,1fr,min-content]">
        <Header />
        <article class="">{children}</article>
        <Footer />
      </body>
    </html>
  );
};

export default Base;
