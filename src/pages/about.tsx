import Link from 'next/link';
import { memo } from 'react';

import { Background } from '../background/Background';
import { Meta } from '../layout/Meta';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Footer } from '../templates/Footer';
import { Logo } from '../templates/Logo';
import { AppConfig } from '../utils/AppConfig';

// 时间线项目组件
const TimelineItem = memo(
  ({
    year,
    title,
    description,
    isLast,
  }: {
    year: string;
    title: string;
    description: string;
    isLast?: boolean;
  }) => (
    <div className="relative flex items-start">
      <div className="flex flex-col items-center">
        <div className="flex size-12 items-center justify-center rounded-full bg-apple-blue shadow-lg">
          <div className="size-4 rounded-full bg-white"></div>
        </div>
        {!isLast && <div className="mt-4 h-16 w-0.5 bg-gray-200"></div>}
      </div>
      <div className="ml-6 flex-1">
        <div className="mb-2 flex items-center">
          <span className="mr-4 rounded-full bg-apple-blue/10 px-3 py-1 text-sm font-bold text-apple-blue">
            {year}
          </span>
        </div>
        <h3 className="mb-2 font-display text-xl font-bold text-gray-900">
          {title}
        </h3>
        <p className="font-text leading-relaxed text-gray-600">{description}</p>
      </div>
    </div>
  ),
);

TimelineItem.displayName = 'TimelineItem';

// 特色卡片组件
const FeatureCard = memo(
  ({
    icon,
    title,
    description,
    stats,
  }: {
    icon: React.ReactNode;
    title: string;
    description: string;
    stats?: string;
  }) => (
    <div className="group relative overflow-hidden rounded-apple-xl bg-white p-8 shadow-apple transition-all duration-300 hover:shadow-apple-lg">
      {/* 背景装饰 */}
      <div className="absolute -right-8 -top-8 size-24 rounded-full bg-gradient-to-br from-apple-blue/5 to-apple-blue/10 transition-all duration-300 group-hover:scale-110"></div>

      <div className="relative">
        <div className="mb-6 flex size-16 items-center justify-center rounded-apple bg-gradient-to-br from-apple-blue to-blue-600 shadow-lg">
          {icon}
        </div>

        <h3 className="mb-4 font-display text-xl font-bold text-gray-900">
          {title}
        </h3>

        <p className="mb-4 font-text leading-relaxed text-gray-600">
          {description}
        </p>

        {stats && (
          <div className="rounded-apple bg-apple-blue/5 p-3">
            <span className="font-display text-lg font-bold text-apple-blue">
              {stats}
            </span>
          </div>
        )}
      </div>
    </div>
  ),
);

FeatureCard.displayName = 'FeatureCard';

const About = () => {
  return (
    <div className="bg-white font-text text-gray-600 antialiased selection:bg-apple-blue/10 selection:text-apple-blue">
      <Meta
        title={`关于我们 - ${AppConfig.title}`}
        description="东莞市众联达精密模具有限公司成立于2019年，专注于钻尾（自攻）螺丝模具生产销售，拥有6年发展历程和20多年行业经验。"
      />

      {/* 导航栏 */}
      <Background color="bg-gray-50">
        <Section yPadding="py-6">
          <NavbarTwoColumns logo={<Logo xl />}>
            <li>
              <Link
                href="/about"
                className="font-text text-base font-medium text-apple-blue"
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
                className="font-text text-base font-medium text-gray-700 transition-colors duration-200 hover:text-apple-blue"
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
            关于我们
          </h1>
          <p className="mx-auto max-w-4xl animate-slide-up font-text text-xl leading-normal tracking-wide text-gray-600 md:text-2xl">
            东莞市众联达精密模具有限公司——专业钻尾（自攻）螺丝模具制造商
          </p>
        </div>

        {/* 公司简介 */}
        <div
          className="mb-20 animate-slide-up"
          style={{ animationDelay: '0.3s' }}
        >
          <div className="mx-auto max-w-6xl">
            <div className="rounded-apple-xl bg-gradient-to-br from-gray-50 to-gray-100 p-12 md:p-16">
              <div className="grid items-center gap-12 md:grid-cols-2">
                <div>
                  <h2 className="mb-6 font-display text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
                    企业简介
                  </h2>
                  <div className="space-y-4 font-text text-lg leading-relaxed text-gray-700">
                    <p>
                      东莞市众联达精密模具有限公司成立于2019年，至今已有6年发展历程。公司专注于生产和销售钻尾（自攻）螺丝模具，凭借先进的设备和专业的技术团队，已成长为行业中等规模企业。
                    </p>
                    <p>
                      公司创始人刘先生拥有20多年的行业经验，带领团队不断创新、精益求精。我们与多家业内知名螺丝厂建立了稳固的合作关系，始终坚持以质量为核心、以服务为导向，持续提升产品性能，赢得了客户的广泛认可和信赖。
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative">
                    <div className="size-64 rounded-apple-xl bg-gradient-to-br from-apple-blue to-blue-600 shadow-apple-lg"></div>
                    <div className="absolute inset-0 flex items-center justify-center rounded-apple-xl bg-gradient-to-br from-apple-blue/90 to-blue-600/90">
                      <div className="text-center text-white">
                        <div className="mb-4 font-display text-6xl font-bold">
                          6
                        </div>
                        <div className="font-text text-xl">年发展历程</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 核心优势 */}
        <div
          className="mb-20 animate-slide-up"
          style={{ animationDelay: '0.9s' }}
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center font-display text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              核心优势
            </h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
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
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                }
                title="丰富经验"
                description="创始人拥有20多年行业经验，深度理解市场需求和技术发展趋势。"
                stats="20+ 年经验"
              />

              <FeatureCard
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                }
                title="品质保证"
                description="严格的质量控制体系，确保每一件产品都达到行业标准和客户要求。"
                stats="100% 质检"
              />

              <FeatureCard
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                }
                title="技术创新"
                description="持续投入研发，不断优化生产工艺，提升产品性能和竞争力。"
                stats="持续研发"
              />

              <FeatureCard
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
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                }
                title="专业团队"
                description="拥有经验丰富的技术团队，为客户提供专业的技术支持和解决方案。"
                stats="专业服务"
              />

              <FeatureCard
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
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                }
                title="合理价格"
                description="基于规模化生产优势，为客户提供具有竞争力的价格方案。"
                stats="优势价格"
              />

              <FeatureCard
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
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                }
                title="客户信赖"
                description="与多家知名螺丝厂建立长期合作关系，赢得客户广泛认可和信赖。"
                stats="长期合作"
              />
            </div>
          </div>
        </div>

        {/* 联系我们 CTA */}
        <div
          className="animate-slide-up text-center"
          style={{ animationDelay: '1.5s' }}
        >
          <div className="mx-auto max-w-4xl rounded-apple-xl bg-gradient-to-r from-apple-blue to-blue-600 p-12 text-white shadow-apple-lg">
            <h2 className="mb-6 font-display text-3xl font-bold md:text-4xl">
              期待与您携手合作
            </h2>
            <p className="mx-auto mb-8 max-w-2xl font-text text-lg leading-relaxed opacity-90">
              选择众联达，选择专业与品质。我们将竭诚为您提供最优质的钻尾（自攻）螺丝模具解决方案，共创美好未来。
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="apple-button bg-white px-8 py-3 text-apple-blue hover:bg-gray-50 hover:shadow-apple"
              >
                <svg
                  className="mr-2 size-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                联系我们
              </Link>
              <Link
                href="/products"
                className="apple-button border-2 border-white bg-transparent px-8 py-3 text-white hover:bg-white hover:text-apple-blue"
              >
                <svg
                  className="mr-2 size-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                查看产品
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default About;
