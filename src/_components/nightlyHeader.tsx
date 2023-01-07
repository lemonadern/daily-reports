type Props = {
  title: string;
  subtitle: string;
};

export const NightlyHeader = ({ title, subtitle }: Props) => (
  <header class="flex flex-col items-center gap-4 py-16">
    <h1 class="text-3xl font-extrabold">
      {title}
    </h1>
    <p class="text-md opacity-70">{subtitle}</p>
  </header>
);
