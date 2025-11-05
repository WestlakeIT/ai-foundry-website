import { cva, type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';

const button = cva(
  'inline-flex items-center justify-center rounded-full font-semibold transition-shadow focus:outline-none focus:ring-2 focus:ring-accent/50 disabled:opacity-60',
  {
    variants: {
      variant: {
        primary:
          'bg-gradient-to-br from-primary to-primaryDark text-white shadow-[0_10px_30px_rgba(99,102,241,0.3)] hover:shadow-[0_15px_40px_rgba(99,102,241,0.4)]',
        secondary: 'border-2 border-primary text-text hover:bg-primary/10',
        ghost: 'text-text hover:bg-white/5'
      },
      size: {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-5 py-2',
        lg: 'px-6 py-3 text-lg'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md'
    }
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof button>;

export default function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button className={clsx(button({ variant, size }), className)} {...props} />;
}

