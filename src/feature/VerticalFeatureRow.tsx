import className from 'classnames';
import { useRouter } from 'next/router';
import { memo, useMemo } from 'react';

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

const VerticalFeatureRow = memo((props: IVerticalFeatureRowProps) => {
  // 使用useMemo缓存className计算结果
  const verticalFeatureClass = useMemo(
    () =>
      className(
        'mt-24',
        'flex',
        'flex-wrap',
        'items-center',
        'gap-8',
        'md:gap-16',
        {
          'flex-row-reverse': props.reverse,
        },
      ),
    [props.reverse],
  );

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full sm:w-1/2 sm:px-6">
        <div className="animate-fade-in">
          <h3 className="mb-6 font-display text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            {props.title}
          </h3>
          <div className="font-text text-xl leading-normal tracking-wide text-gray-600 md:text-xl">
            {props.description}
          </div>
        </div>
      </div>

      <div className="w-full sm:w-1/2 sm:px-6">
        <div className="relative overflow-hidden rounded-apple-xl shadow-apple-lg transition-all duration-300 hover:scale-105 hover:shadow-apple-xl">
          <img
            src={`${router.basePath}${props.image}`}
            alt={props.imageAlt}
            className="h-auto w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
        </div>
      </div>
    </div>
  );
});

// 添加displayName以便调试
VerticalFeatureRow.displayName = 'VerticalFeatureRow';

export { VerticalFeatureRow };
