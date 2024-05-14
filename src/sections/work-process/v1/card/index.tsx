export interface WorkprocessCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  count: string;
}

export function WorkprocessCard({
  icon,
  title,
  description,
  count,
}: WorkprocessCardProps) {
  return (
    <div className="relative whitespace-normal rounded-5 bg-accent-100 p-6  dark:bg-accent-700 lg:p-10">
      <div className="flex items-center gap-5">
        <div className="relative flex-none">
          <span className="absolute -top-3 inline-block h-16 w-16 rounded-full bg-primary"></span>
          <span className="relative -left-3 top-3 z-1 text-white">{icon}</span>
        </div>
        <h3 className="h3 text-accent-900 dark:text-white">{title}</h3>
      </div>
      <p className="mt-6">{description}</p>
      <div className="mt-7 pr-[120px]"></div>
      <span className="absolute -bottom-5 right-5 z-1 text-[68px] font-bold text-primary/10 dark:text-white/10">
        {count}
      </span>
    </div>
  );
}
