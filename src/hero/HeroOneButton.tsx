import type { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="animate-fade-in text-center">
    <h1 className="mb-6 whitespace-pre-line font-display text-5xl font-bold leading-tight tracking-tighter text-gray-900 md:text-6xl lg:text-7xl">
      {props.title}
    </h1>
    <div className="mx-auto mb-12 mt-8 max-w-3xl font-text text-xl leading-normal tracking-wide text-gray-600 md:text-2xl">
      {props.description}
    </div>

    <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
      {props.button}
    </div>
  </header>
);

export { HeroOneButton };
