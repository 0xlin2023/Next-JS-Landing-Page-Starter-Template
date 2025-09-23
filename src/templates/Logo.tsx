import Image from 'next/image';
import { memo, useMemo } from 'react';

import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = memo((props: ILogoProps) => {
  const size = props.xl ? 56 : 48;

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
      <div className="mr-4 flex items-center justify-center">
        <Image
          src="/assets/images/zld——logo2.png"
          alt={`${AppConfig.site_name} Logo`}
          width={size}
          height={size}
          className="object-contain"
          priority
        />
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
