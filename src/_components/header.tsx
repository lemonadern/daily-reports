import { SOURCECODE_LINK } from "constants/links.ts";
import { SITE_NAME, SITE_URL } from "constants/constants.ts";

export const Header = () => {
  return (
    <header class="border-b px-6 md:px-8 py-4">
      <div class="flex items-center justify-between mx-auto">
        <a href="/" class="flex items-center gap-4 text-xl font-title">
          {SITE_NAME}
        </a>

        <a href={SOURCECODE_LINK} class="<md:hidden">
          <img
            alt="GitHub Icon"
            class="w-4 <md:hidden"
            src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/github.svg"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
