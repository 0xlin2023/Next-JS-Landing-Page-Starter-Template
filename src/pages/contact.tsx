import Link from 'next/link';
import { memo, useCallback, useState } from 'react';

import { Background } from '../background/Background';
import { Meta } from '../layout/Meta';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Footer } from '../templates/Footer';
import { Logo } from '../templates/Logo';
import { AppConfig } from '../utils/AppConfig';

// 联系信息数据
const CONTACT_INFO = {
  phone: '15016880293',
  email: 'liuying_angel@163.com',
  address: '广东省东莞市大朗镇富升路62号201室',
};

// 联系卡片组件
const ContactCard = memo(
  ({
    icon,
    title,
    content,
    href,
    type,
  }: {
    icon: React.ReactNode;
    title: string;
    content: string;
    href?: string;
    type: 'phone' | 'email' | 'address';
  }) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleClick = useCallback(async () => {
      if (type === 'phone' || type === 'email') {
        try {
          await navigator.clipboard.writeText(content);
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
          // 降级到选中文本
          const textArea = document.createElement('textarea');
          textArea.value = content;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 2000);
        }
      } else if (type === 'address' && href) {
        window.open(href, '_blank');
      }
    }, [content, href, type]);

    // 计算className
    const getCardClassName = () => {
      const baseClass =
        'group relative overflow-hidden rounded-apple-xl bg-white p-8 shadow-apple transition-all duration-300 hover:shadow-apple-lg';

      if (type !== 'address') {
        return `${baseClass} cursor-pointer`;
      }

      if (href) {
        return `${baseClass} cursor-pointer`;
      }

      return baseClass;
    };

    return (
      <div className={getCardClassName()} onClick={handleClick}>
        {/* 背景装饰 */}
        <div className="absolute -right-8 -top-8 size-24 rounded-full bg-gradient-to-br from-apple-blue/5 to-apple-blue/10 transition-all duration-300 group-hover:scale-110"></div>

        <div className="relative">
          <div className="mb-6 flex size-16 items-center justify-center rounded-apple bg-gradient-to-br from-apple-blue to-blue-600 shadow-lg">
            {icon}
          </div>

          <h3 className="mb-4 font-display text-xl font-bold text-gray-900">
            {title}
          </h3>

          <p className="font-text leading-relaxed text-gray-600">{content}</p>

          {/* 复制提示 */}
          {isCopied && (
            <div className="absolute right-4 top-4 rounded-full bg-green-500 px-3 py-1 text-sm text-white">
              已复制!
            </div>
          )}

          {/* 交互提示 */}
          <div className="mt-4 flex items-center text-sm text-gray-500">
            {(type === 'phone' || type === 'email') && (
              <>
                <svg
                  className="mr-2 size-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                点击复制
              </>
            )}
            {type === 'address' && href && (
              <>
                <svg
                  className="mr-2 size-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                点击查看地图
              </>
            )}
          </div>
        </div>
      </div>
    );
  },
);

ContactCard.displayName = 'ContactCard';

const Contact = () => {
  return (
    <div className="bg-white font-text text-gray-600 antialiased selection:bg-apple-blue/10 selection:text-apple-blue">
      <Meta
        title={`联系我们 - ${AppConfig.title}`}
        description="联系东莞市众联达精密模具有限公司，获取专业钻尾（自攻）螺丝模具解决方案。电话：15016880293，地址：广东省东莞市大朗镇富升路62号201室。"
      />

      {/* 导航栏 */}
      <Background color="bg-gray-50">
        <Section yPadding="py-6">
          <NavbarTwoColumns logo={<Logo xl />}>
            <li>
              <Link
                href="/about"
                className="font-text text-base font-medium text-gray-700 transition-colors duration-200 hover:text-apple-blue"
              >
                关于我们
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="font-text text-base font-medium text-gray-700 transition-colors duration-200 hover:text-apple-blue"
              >
                产品中心
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="font-text text-base font-medium text-apple-blue"
              >
                联系我们
              </Link>
            </li>
          </NavbarTwoColumns>
        </Section>
      </Background>

      {/* 主要内容 */}
      <Section yPadding="pt-20 pb-32">
        {/* 页面标题 */}
        <div className="mb-16 text-center">
          <h1 className="mb-6 animate-fade-in font-display text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
            联系我们
          </h1>
          <p className="mx-auto max-w-4xl animate-slide-up font-text text-xl leading-normal tracking-wide text-gray-600 md:text-2xl">
            我们期待与您合作，为您提供专业的钻尾（自攻）螺丝模具解决方案。欢迎通过以下方式与我们取得联系。
          </p>
        </div>

        {/* 地图和联系方式 */}
        <div
          className="mb-20 animate-slide-up"
          style={{ animationDelay: '0.3s' }}
        >
          <div className="mx-auto max-w-6xl">
            {/* 地图区域 */}
            <div className="mb-12 overflow-hidden rounded-apple-xl shadow-apple-lg">
              <div className="bg-gray-100 p-4">
                <h3 className="mb-2 font-display text-xl font-bold text-gray-900">
                  公司位置
                </h3>
                <p className="font-text text-gray-600">
                  {CONTACT_INFO.address}
                </p>
              </div>
              <div className="relative h-80 md:h-96">
                {/* 嵌入Google地图 */}
                <iframe
                  src={`https://www.google.com/maps?q=${encodeURIComponent(CONTACT_INFO.address)}&output=embed&z=15`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="公司位置地图"
                  className="rounded-b-apple-xl"
                ></iframe>

                {/* 地图覆盖层信息 */}
                <div className="absolute inset-x-4 bottom-4 rounded-apple bg-white/95 p-4 shadow-lg backdrop-blur-sm">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="mb-1 font-display font-bold text-gray-900">
                        东莞市众联达精密模具有限公司
                      </h4>
                      <p className="mb-2 font-text text-sm text-gray-600">
                        {CONTACT_INFO.address}
                      </p>
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="flex items-center text-apple-blue">
                          <svg
                            className="mr-1 size-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                          {CONTACT_INFO.phone}
                        </span>
                        <span className="flex items-center text-gray-600">
                          <svg
                            className="mr-1 size-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          周一至周五 8:00-18:00
                        </span>
                      </div>
                    </div>
                    <div className="ml-4 flex flex-col gap-2">
                      <a
                        href={`https://www.google.com/maps/dir//${encodeURIComponent(CONTACT_INFO.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center rounded-full bg-apple-blue px-3 py-2 text-sm text-white transition-colors hover:bg-apple-blue-dark"
                      >
                        <svg
                          className="mr-1 size-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        导航
                      </a>
                      <a
                        href={`https://uri.amap.com/navigation?to=${encodeURIComponent(CONTACT_INFO.address)}&toname=${encodeURIComponent('众联达精密模具')}&callnative=0`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center rounded-full border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50"
                      >
                        <svg
                          className="mr-1 size-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                        </svg>
                        高德
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 联系方式卡片 */}
            <div className="grid gap-8 md:grid-cols-3">
              {/* 电话卡片 */}
              <ContactCard
                type="phone"
                icon={
                  <svg
                    className="size-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                }
                title="联系电话"
                content={CONTACT_INFO.phone}
              />

              {/* 邮箱卡片 */}
              <ContactCard
                type="email"
                icon={
                  <svg
                    className="size-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                }
                title="电子邮箱"
                content={CONTACT_INFO.email}
              />

              {/* 地址卡片 */}
              <ContactCard
                type="address"
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_INFO.address)}`}
                icon={
                  <svg
                    className="size-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                }
                title="公司地址"
                content={CONTACT_INFO.address}
              />
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Contact;
