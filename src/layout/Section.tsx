import type { ReactNode } from 'react';
import { memo } from 'react';

type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
  children: ReactNode;
};

const Section = memo((props: ISectionProps) => (
  <div
    className={`mx-auto max-w-7xl px-6 lg:px-8 ${
      props.yPadding ? props.yPadding : 'py-20'
    }`}
  >
    {(props.title || props.description) && (
      <div className="mb-16 animate-fade-in text-center">
        {props.title && (
          <h2 className="mb-6 font-display text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            {props.title}
          </h2>
        )}
        {props.description && (
          <div className="mx-auto max-w-4xl font-text text-xl leading-normal tracking-wide text-gray-600 md:text-2xl">
            {props.description}
          </div>
        )}
      </div>
    )}

    <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
      {props.children}
    </div>
  </div>
));

// 添加displayName以便调试
Section.displayName = 'Section';

export { Section };
