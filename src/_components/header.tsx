import { SOURCECODE_LINK } from "constants/links.ts";
import { SITE_NAME } from "constants/constants.ts";

export const Header = () => {
  return (
    <header class="border px-16 py-4">
      <div class="flex items-center justify-between mx-auto">
        <div class="flex items-center gap-4 text-xl font-title">
          {SITE_NAME}
          <span class="material-symbols-outlined">
            nights_stay
          </span>
        </div>

        <a href={SOURCECODE_LINK}>
          <img
            alt="GitHub Icon"
            class="w-6"
            src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/github.svg"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
