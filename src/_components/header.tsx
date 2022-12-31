import { sourceCodeLink } from "constants/links.ts";

export const Header = () => {
  return (
    <header class="border px-16 py-4">
      <div class="flex items-center justify-between mx-auto">
        <div class="flex items-center gap-4 text-xl">
          <a href="/">
            <img
              class="w-8 rounded-1/2"
              src="/assets/profile.webp"
              alt="Profile image"
            />
          </a>
          lemonadern nightly
          <img class="w-6 fill-sky-800" src="/assets/nights-stay-moon.svg" />
        </div>

        <a href={sourceCodeLink}>
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
