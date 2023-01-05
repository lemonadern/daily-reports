type Props = {
  title: string;
  overview: string;
};

export const NightlyHeader = ({ title, overview }: Props) => (
  <header class="flex flex-col items-center gap-4 py-16">
    <h1 class="text-3xl font-extrabold">
      {title}
    </h1>
    <p class="text-md opacity-70">{overview}</p>
  </header>
);
