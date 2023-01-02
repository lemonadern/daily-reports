import { ComponentChildren } from "npm:preact";
import { Header } from "components/header.tsx";
import { Footer } from "components/footer.tsx";
import { removeDuplications } from "utils/removeDuplications.ts";
import { SITE_NAME } from "constants/constants.ts";

const titleCharacterSetString = removeDuplications(SITE_NAME).trim();

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
        <link
          href={`https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap&text=${titleCharacterSetString}`}
          rel="stylesheet"
        >
        </link>
      </head>
      <body class="min-h-screen grid grid-rows-[min-content,1fr,min-content] grid-cols-1 bg-fresh-marine-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default Base;
