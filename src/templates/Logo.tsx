import { memo, useMemo } from 'react';

import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = memo((props: ILogoProps) => {
  const size = props.xl ? '40' : '32';

  // 使用useMemo缓存动态计算的样式
  const fontStyle = useMemo(
    () =>
      props.xl
        ? 'font-display font-bold text-2xl tracking-tight'
        : 'font-display font-bold text-xl tracking-tight',
    [props.xl],
  );

  return (
    <span
      className={`inline-flex items-center text-gray-900 ${fontStyle} transition-opacity duration-200 hover:opacity-80`}
    >
      <div className="mr-3 flex items-center justify-center">
        <svg
          className="fill-current text-apple-blue drop-shadow-sm"
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
        >
          <defs>
            <linearGradient
              id="logoGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#0071e3" />
              <stop offset="100%" stopColor="#2997ff" />
            </linearGradient>
          </defs>
          <path
            fill="url(#logoGradient)"
            d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"
          />
          <path d="M8 10h8v2H8zm0 4h8v2H8z" fill="white" opacity="0.9" />
        </svg>
      </div>

      <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
        {AppConfig.site_name}
      </span>
    </span>
  );
});

// 添加displayName以便调试
Logo.displayName = 'Logo';

export { Logo };
