import clsx from 'clsx';

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  hover?: boolean;
};

export default function Card({ className, hover = true, ...props }: CardProps) {
  return (
    <div
      className={clsx(
        'rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-accent/5 p-6',
        hover && 'transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(99,102,241,0.2)] hover:border-accent',
        className
      )}
      {...props}
    />
  );
}

