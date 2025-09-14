import className from 'classnames';

type IButtonProps = {
  xl?: boolean;
  children: string;
  variant?: 'primary' | 'secondary';
  className?: string;
};

const Button = (props: IButtonProps) => {
  const btnClass = className(
    // Apple Button Base Styles
    'apple-button',
    'inline-flex',
    'items-center',
    'justify-center',
    'rounded-apple',
    'font-semibold',
    'text-base',
    'transition-all',
    'duration-200',
    'ease-in-out',
    'shadow-apple',
    'hover:shadow-apple-lg',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2',
    'active:scale-95',
    // Size variants
    {
      'h-11 px-6 text-base font-semibold': !props.xl,
      'h-14 px-8 text-lg font-bold': props.xl,
    },
    // Color variants
    {
      'bg-apple-blue text-white hover:bg-apple-blue-dark hover:shadow-apple-blue focus:ring-apple-blue/50':
        !props.variant || props.variant === 'primary',
      'bg-transparent text-apple-blue border border-apple-blue hover:bg-apple-blue hover:text-white focus:ring-apple-blue/50':
        props.variant === 'secondary',
    },
    props.className,
  );

  return <button className={btnClass}>{props.children}</button>;
};

export { Button };
