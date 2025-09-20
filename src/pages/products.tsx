import Link from 'next/link';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { Background } from '../background/Background';
import { Meta } from '../layout/Meta';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Footer } from '../templates/Footer';
import { Logo } from '../templates/Logo';
import { AppConfig } from '../utils/AppConfig';

// 提取静态数据为常量，避免重复创建
const DRILL_DIAMETERS = [
  2.2, 2.3, 2.7, 2.8, 2.9, 3.0, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9,
  4.0, 4.1, 4.2, 4.3, 4.5, 4.7, 4.9, 5.1, 5.3, 5.5, 5.7,
];

// 导航菜单数据
const NAVIGATION_ITEMS = [
  {
    id: 'drill-types',
    title: '钻尾刀型',
    icon: (
      <svg
        className="size-5"
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
    ),
  },
  {
    id: 'drill-specifications',
    title: '钻尾模具尺寸',
    icon: (
      <svg
        className="size-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 0v10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
        />
      </svg>
    ),
  },
];

// 钻尾刀型图片数据
const DRILL_TYPE_IMAGES = [
  { id: 'Z01', name: '钻尾Z01', description: 'Z01型钻尾刀具' },
  { id: 'Z02', name: '钻尾Z02', description: 'Z02型钻尾刀具' },
  { id: 'Z03', name: '钻尾Z03', description: 'Z03型钻尾刀具' },
  { id: 'Z04', name: '钻尾Z04', description: 'Z04型钻尾刀具' },
  { id: 'Z05', name: '钻尾Z05', description: 'Z05型钻尾刀具' },
  { id: 'Z06', name: '钻尾Z06', description: 'Z06型钻尾刀具' },
  { id: 'Z07', name: '钻尾Z07', description: 'Z07型钻尾刀具' },
  { id: 'Z08', name: '钻尾Z08', description: 'Z08型钻尾刀具' },
  { id: 'Z09', name: '钻尾Z09', description: 'Z09型钻尾刀具' },
  { id: 'Z10', name: '钻尾Z10', description: 'Z10型钻尾刀具' },
  { id: 'Z11', name: '钻尾Z11', description: 'Z11型钻尾刀具' },
  { id: 'Z12', name: '钻尾Z12', description: 'Z12型钻尾刀具' },
  { id: 'Z13', name: '钻尾Z13', description: 'Z13型钻尾刀具' },
  { id: 'Z14', name: '钻尾Z14', description: 'Z14型钻尾刀具' },
  { id: 'Z15', name: '钻尾Z15', description: 'Z15型钻尾刀具' },
  { id: 'Z16', name: '钻尾Z16', description: 'Z16型钻尾刀具' },
  { id: 'Z17', name: '钻尾Z17', description: 'Z17型钻尾刀具' },
  { id: 'Z18', name: '钻尾Z18', description: 'Z18型钻尾刀具' },
  { id: 'Z19', name: '钻尾Z19', description: 'Z19型钻尾刀具' },
  { id: 'Z20', name: '钻尾Z20', description: 'Z20型钻尾刀具' },
  { id: 'Z21', name: '钻尾Z21', description: 'Z21型钻尾刀具' },
  { id: 'Z22', name: '钻尾Z22', description: 'Z22型钻尾刀具' },
];

const DP_DIE_CODES = {
  L1: [
    'L1-22',
    'L1-23',
    'L1-27',
    'L1-28',
    'L1-29',
    'L1-30',
    'L1-31',
    'L1-32',
    'L1-33',
    'L1-34',
    'L1-35',
    'L1-36',
    'L1-37',
    'L1-38',
    'L1-39',
    'L1-40',
    'L1-41',
    'L1-42',
    'L1-43',
    'L1-45',
    'L1-47',
    'L1-49',
    'L1-51',
    'L1-53',
    'L1-55',
    'L1-57',
  ],
  L2: [
    'L2-22',
    'L2-23',
    'L2-27',
    'L2-28',
    'L2-29',
    'L2-30',
    'L2-31',
    'L2-32',
    'L2-33',
    'L2-34',
    'L2-35',
    'L2-36',
    'L2-37',
    'L2-38',
    'L2-39',
    'L2-40',
    'L2-41',
    'L2-42',
    'L2-43',
    'L2-45',
    'L2-47',
    'L2-49',
    'L2-51',
    'L2-53',
    'L2-55',
    'L2-57',
  ],
  L3: [
    'L3-27',
    'L3-28',
    'L3-29',
    'L3-30',
    'L3-31',
    'L3-32',
    'L3-33',
    'L3-34',
    'L3-35',
    'L3-36',
    'L3-37',
    'L3-38',
    'L3-39',
    'L3-40',
    'L3-41',
    'L3-42',
    'L3-43',
    'L3-45',
    'L3-47',
    'L3-49',
    'L3-51',
    'L3-53',
    'L3-55',
    'L3-57',
  ],
  L4: ['L4-43', 'L4-45', 'L4-47', 'L4-49', 'L4-51', 'L4-53', 'L4-55', 'L4-57'],
  L5: ['L5-49', 'L5-51', 'L5-53', 'L5-55', 'L5-57'],
  L6: ['L6-49', 'L6-51', 'L6-53', 'L6-55', 'L6-57'],
};

const Products = () => {
  const [activeSection, setActiveSection] = useState('');

  // 平滑滚动到指定区域
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setActiveSection(sectionId);
    }
  }, []);

  // 监听滚动位置以高亮当前区域
  useEffect(() => {
    const handleScroll = () => {
      const sections = NAVIGATION_ITEMS.map((item) => item.id);
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初始化
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 使用useMemo缓存钻头直径列渲染
  const drillDiameterHeaders = useMemo(
    () =>
      DRILL_DIAMETERS.map((dia, index) => (
        <th
          key={index}
          className="border border-gray-300 p-2 text-center text-xs font-medium"
        >
          {dia}
        </th>
      )),
    [],
  );

  // 使用useMemo缓存各系列DP DIE CODE渲染
  const dpDieCodeCells = useMemo(
    () => ({
      L1: DP_DIE_CODES.L1.map((code, index) => (
        <td
          key={index}
          className="border border-gray-300 px-1 py-2 text-center text-xs font-medium"
        >
          {code}
        </td>
      )),
      L2: DP_DIE_CODES.L2.map((code, index) => (
        <td
          key={index}
          className="border border-gray-300 px-1 py-2 text-center text-xs font-medium"
        >
          {code}
        </td>
      )),
      L3: DP_DIE_CODES.L3.map((code, index) => (
        <td
          key={index}
          className="border border-gray-300 px-1 py-2 text-center text-xs font-medium"
        >
          {code}
        </td>
      )),
      L4: DP_DIE_CODES.L4.map((code, index) => (
        <td
          key={index}
          className="border border-gray-300 px-1 py-2 text-center text-xs font-medium"
        >
          {code}
        </td>
      )),
      L5: DP_DIE_CODES.L5.map((code, index) => (
        <td
          key={index}
          className="border border-gray-300 px-1 py-2 text-center text-xs font-medium"
        >
          {code}
        </td>
      )),
      L6: DP_DIE_CODES.L6.map((code, index) => (
        <td
          key={index}
          className="border border-gray-300 px-1 py-2 text-center text-xs font-medium"
        >
          {code}
        </td>
      )),
    }),
    [],
  );

  return (
    <div className="bg-white font-text text-gray-600 antialiased selection:bg-apple-blue/10 selection:text-apple-blue">
      <Meta
        title={`钻尾模具 - ${AppConfig.title}`}
        description="东莞市众联达精密模具钻尾模具产品系列：专业生产MB、MC系列钻尾模具，采用高速钢和铬钢材质，满足不同客户工艺需求的精密模具解决方案。"
      />

      {/* 左侧快速导航 */}
      <div className="fixed left-6 top-1/2 z-30 hidden -translate-y-1/2 lg:block">
        <div className="space-y-3">
          {NAVIGATION_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`group relative flex items-center gap-3 rounded-full px-4 py-3 shadow-lg transition-all duration-300 hover:scale-105 ${
                activeSection === item.id
                  ? 'bg-apple-blue text-white shadow-apple-blue'
                  : 'bg-white text-gray-600 hover:bg-apple-blue hover:text-white hover:shadow-apple-blue'
              }`}
              title={item.title}
              aria-label={`跳转到${item.title}部分`}
            >
              {item.icon}
              <span className="whitespace-nowrap text-sm font-medium">
                {item.title}
              </span>
            </button>
          ))}
        </div>
      </div>

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
                className="font-text text-base font-medium text-apple-blue"
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

      <Section yPadding="pt-20 pb-32">
        <div className="mb-16 text-center">
          <h1 className="mb-6 animate-fade-in font-display text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
            钻尾模具
          </h1>
        </div>

        {/* 钻尾刀型展示 */}
        <div
          id="drill-types"
          className="mb-20 animate-slide-up"
          style={{ animationDelay: '0.2s' }}
        >
          <h2 className="mb-12 text-center font-display text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            钻尾刀型展示
          </h2>

          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
              {DRILL_TYPE_IMAGES.map((image, index) => (
                <div
                  key={image.id}
                  className="group relative overflow-hidden rounded-apple-xl bg-white p-4 shadow-apple transition-all duration-300 hover:-translate-y-2 hover:shadow-apple-lg"
                  style={{ animationDelay: `${0.1 + index * 0.05}s` }}
                >
                  {/* 图片容器 */}
                  <div className="relative aspect-square overflow-hidden rounded-apple bg-gray-50">
                    <img
                      src={`/assets/images/钻尾刀型/${image.name}.jpg`}
                      alt={image.description}
                      className="size-full object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />

                    {/* 图片覆盖层 */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  </div>

                  {/* 产品信息 */}
                  <div className="mt-4 text-center">
                    <h3 className="font-display text-lg font-bold text-gray-900">
                      {image.id}
                    </h3>
                    <p className="mt-1 font-text text-sm text-gray-600">
                      {image.description}
                    </p>
                  </div>

                  {/* 悬停时显示的详细信息 */}
                  <div className="absolute inset-0 flex items-center justify-center bg-apple-blue/95 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <div className="text-center text-white">
                      <div className="mx-auto mb-2 flex size-12 items-center justify-center rounded-full bg-white/20">
                        <svg
                          className="size-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </div>
                      <p className="font-display text-sm font-semibold">
                        {image.id}型
                      </p>
                      <p className="mt-1 font-text text-xs opacity-90">
                        点击查看详情
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 钻尾模具规格表 */}
        <div
          id="drill-specifications"
          className="animate-slide-up"
          style={{ animationDelay: '0.4s' }}
        >
          <h2 className="mb-12 text-center font-display text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            产品规格表
          </h2>

          <div className="mb-12 overflow-x-auto rounded-apple-xl bg-white p-6 shadow-apple-lg">
            <table className="w-full min-w-[1200px] border-collapse">
              {/* 表头 - IFI 规格 */}
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-3 py-2 text-left text-sm font-semibold text-gray-900">
                    IFI
                  </th>
                  <th
                    className="border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-gray-900"
                    colSpan={2}
                  >
                    #4
                  </th>
                  <th
                    className="border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-gray-900"
                    colSpan={3}
                  >
                    #6
                  </th>
                  <th
                    className="border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-gray-900"
                    colSpan={3}
                  >
                    #7
                  </th>
                  <th
                    className="border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-gray-900"
                    colSpan={4}
                  >
                    #8
                  </th>
                  <th
                    className="border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-gray-900"
                    colSpan={5}
                  >
                    #10
                  </th>
                  <th
                    className="border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-gray-900"
                    colSpan={5}
                  >
                    #12
                  </th>
                  <th
                    className="border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-gray-900"
                    colSpan={4}
                  >
                    #14
                  </th>
                </tr>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-3 py-2 text-left text-sm font-semibold text-gray-900">
                    DIN
                  </th>
                  <th
                    className="border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-gray-900"
                    colSpan={2}
                  >
                    ST 2.9
                  </th>
                  <th
                    className="border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-gray-900"
                    colSpan={3}
                  >
                    ST 3.5
                  </th>
                  <th
                    className="border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-gray-900"
                    colSpan={3}
                  >
                    ST 3.9
                  </th>
                  <th
                    className="border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-gray-900"
                    colSpan={4}
                  >
                    ST 4.2
                  </th>
                  <th
                    className="border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-gray-900"
                    colSpan={5}
                  >
                    ST 4.8
                  </th>
                  <th
                    className="border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-gray-900"
                    colSpan={5}
                  >
                    ST 5.5
                  </th>
                  <th
                    className="border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-gray-900"
                    colSpan={4}
                  >
                    ST 6.3
                  </th>
                </tr>
                <tr className="bg-apple-blue text-white">
                  <th className="border border-gray-300 px-3 py-2 text-left text-sm font-semibold">
                    DRILL DIA. (Dø)
                  </th>
                  {drillDiameterHeaders}
                </tr>
              </thead>

              <tbody>
                {/* 间隔行 */}
                <tr>
                  <td colSpan={27} className="h-4"></td>
                </tr>

                {/* B THREAD 规格 */}
                <tr className="bg-gray-100">
                  <td className="border border-gray-300 px-3 py-2 text-sm font-semibold text-gray-900">
                    POINT DIA. (B THREAD)
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={2}
                  >
                    -
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={3}
                  >
                    2.80
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={3}
                  >
                    3.10
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={4}
                  >
                    3.40
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={5}
                  >
                    3.90
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={5}
                  >
                    4.50
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={4}
                  >
                    5.50
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 text-sm font-semibold text-gray-900">
                    WIRE DIA. (B THREAD)
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={2}
                  >
                    -
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={3}
                  >
                    2.78~2.80
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={3}
                  >
                    3.00
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={4}
                  >
                    3.35~3.80
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={5}
                  >
                    3.78~3.85
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={5}
                  >
                    4.35~4.40
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={4}
                  >
                    5.10~5.15
                  </td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border border-gray-300 px-3 py-2 text-sm font-semibold text-gray-900">
                    POINT DIA. (C THREAD)
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={2}
                  >
                    -
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={3}
                  >
                    2.90
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={3}
                  >
                    3.20
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={4}
                  >
                    3.60
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={5}
                  >
                    4.10
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={5}
                  >
                    4.90
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={4}
                  >
                    5.70
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 text-sm font-semibold text-gray-900">
                    WIRE DIA. (C THREAD)
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={2}
                  >
                    -
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={3}
                  >
                    3.00
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={3}
                  >
                    3.38
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={4}
                  >
                    3.50
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={5}
                  >
                    4.00~4.05
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={5}
                  >
                    4.70
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={4}
                  >
                    5.30
                  </td>
                </tr>

                {/* 间隔行 */}
                <tr>
                  <td colSpan={27} className="h-4"></td>
                </tr>

                {/* NO.1 DP DIES */}
                <tr className="bg-apple-blue text-white">
                  <td
                    className="border border-gray-300 px-2 py-1 text-center text-sm font-bold"
                    rowSpan={3}
                  >
                    NO.1
                    <br />
                    DP
                    <br />
                    DIES
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-sm font-semibold">
                    DP DIE CODE
                  </td>
                  {dpDieCodeCells.L1}
                </tr>
                <tr className="bg-blue-50">
                  <td className="border border-gray-300 px-3 py-2 text-sm font-semibold text-gray-900">
                    FLUTE LENGTH
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={2}
                  >
                    2.7ℓ
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={5}
                  >
                    3.4ℓ
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={5}
                  >
                    4.2ℓ
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={5}
                  >
                    5.0ℓ
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={4}
                  >
                    6.0ℓ
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={5}
                  >
                    7.2ℓ
                  </td>
                </tr>
                <tr className="bg-blue-100">
                  <td className="border border-gray-300 px-3 py-2 text-sm font-semibold text-gray-900">
                    DP DIE STYLE
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={17}
                  >
                    MA (STYLE I)~MB (STYLE II)
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={9}
                  >
                    MB (STYLE II)
                  </td>
                </tr>

                {/* NO.2 DP DIES */}
                <tr className="bg-apple-blue text-white">
                  <td
                    className="border border-gray-300 px-2 py-1 text-center text-sm font-bold"
                    rowSpan={3}
                  >
                    NO.2
                    <br />
                    DP
                    <br />
                    DIES
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-sm font-semibold">
                    DP DIE CODE
                  </td>
                  {dpDieCodeCells.L2}
                </tr>
                <tr className="bg-blue-50">
                  <td className="border border-gray-300 px-3 py-2 text-sm font-semibold text-gray-900">
                    FLUTE LENGTH
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={2}
                  >
                    3.2ℓ
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={5}
                  >
                    4.0ℓ
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={5}
                  >
                    4.9ℓ
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={5}
                  >
                    5.8ℓ
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={4}
                  >
                    6.9ℓ
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={5}
                  >
                    8.0ℓ
                  </td>
                </tr>
                <tr className="bg-blue-100">
                  <td className="border border-gray-300 px-3 py-2 text-sm font-semibold text-gray-900">
                    DP DIE STYLE
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={17}
                  >
                    MA (STYLE I)~MB (STYLE II)
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={9}
                  >
                    MB (STYLE II)
                  </td>
                </tr>

                {/* NO.3 DP DIES */}
                <tr className="bg-apple-blue text-white">
                  <td
                    className="border border-gray-300 px-2 py-1 text-center text-sm font-bold"
                    rowSpan={3}
                  >
                    NO.3
                    <br />
                    DP
                    <br />
                    DIES
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-sm font-semibold">
                    DP DIE CODE
                  </td>
                  <td
                    className="border border-gray-300 px-1 py-2 text-center text-sm"
                    colSpan={2}
                  >
                    -
                  </td>
                  {dpDieCodeCells.L3}
                </tr>
                <tr className="bg-blue-50">
                  <td className="border border-gray-300 px-3 py-2 text-sm font-semibold text-gray-900">
                    FLUTE LENGTH
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={2}
                  >
                    -
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={5}
                  >
                    4.7ℓ
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={5}
                  >
                    5.7ℓ
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={5}
                  >
                    6.7ℓ
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={4}
                  >
                    7.7ℓ
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={1}
                  >
                    8.0ℓ
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={4}
                  >
                    9.0ℓ
                  </td>
                </tr>
                <tr className="bg-blue-100">
                  <td className="border border-gray-300 px-3 py-2 text-sm font-semibold text-gray-900">
                    DP DIE STYLE
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={17}
                  >
                    MA (STYLE I)~MB (STYLE II)
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={9}
                  >
                    MB (STYLE II)
                  </td>
                </tr>

                {/* NO.4 DP DIES */}
                <tr className="bg-apple-blue text-white">
                  <td
                    className="border border-gray-300 px-2 py-1 text-center text-sm font-bold"
                    rowSpan={3}
                  >
                    NO.4
                    <br />
                    DP
                    <br />
                    DIES
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-sm font-semibold">
                    DP DIE CODE
                  </td>
                  <td
                    className="border border-gray-300 px-1 py-2 text-center text-sm"
                    colSpan={18}
                  >
                    -
                  </td>
                  {dpDieCodeCells.L4}
                </tr>
                <tr className="bg-blue-50">
                  <td className="border border-gray-300 px-3 py-2 text-sm font-semibold text-gray-900">
                    FLUTE LENGTH
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={18}
                  >
                    -
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={3}
                  >
                    8.7ℓ
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={5}
                  >
                    11.7ℓ
                  </td>
                </tr>
                <tr className="bg-blue-100">
                  <td className="border border-gray-300 px-3 py-2 text-sm font-semibold text-gray-900">
                    DP DIE STYLE
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={18}
                  >
                    -
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={3}
                  >
                    MB (STYLE II)
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={5}
                  >
                    MC (STYLE III)
                  </td>
                </tr>

                {/* NO.5 DP DIES */}
                <tr className="bg-apple-blue text-white">
                  <td
                    className="border border-gray-300 px-2 py-1 text-center text-sm font-bold"
                    rowSpan={3}
                  >
                    NO.5
                    <br />
                    DP
                    <br />
                    DIES
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-sm font-semibold">
                    DP DIE CODE
                  </td>
                  <td
                    className="border border-gray-300 px-1 py-2 text-center text-sm"
                    colSpan={21}
                  >
                    -
                  </td>
                  {dpDieCodeCells.L5}
                </tr>
                <tr className="bg-blue-50">
                  <td className="border border-gray-300 px-3 py-2 text-sm font-semibold text-gray-900">
                    FLUTE LENGTH
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={21}
                  >
                    -
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={5}
                  >
                    14.7ℓ
                  </td>
                </tr>
                <tr className="bg-blue-100">
                  <td className="border border-gray-300 px-3 py-2 text-sm font-semibold text-gray-900">
                    DP DIE STYLE
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={21}
                  >
                    -
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={5}
                  >
                    MC (STYLE III)
                  </td>
                </tr>

                {/* NO.6 DP DIES */}
                <tr className="border-b-4 border-apple-blue bg-apple-blue text-white">
                  <td
                    className="border border-gray-300 px-2 py-1 text-center text-sm font-bold"
                    rowSpan={3}
                  >
                    NO.6
                    <br />
                    DP
                    <br />
                    DIES
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-sm font-semibold">
                    DP DIE CODE
                  </td>
                  <td
                    className="border border-gray-300 px-1 py-2 text-center text-sm"
                    colSpan={21}
                  >
                    -
                  </td>
                  {dpDieCodeCells.L6}
                </tr>
                <tr className="bg-blue-50">
                  <td className="border border-gray-300 px-3 py-2 text-sm font-semibold text-gray-900">
                    FLUTE LENGTH
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={21}
                  >
                    -
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={5}
                  >
                    17.7ℓ
                  </td>
                </tr>
                <tr className="border-b-4 border-apple-blue bg-blue-100">
                  <td className="border border-gray-300 px-3 py-2 text-sm font-semibold text-gray-900">
                    DP DIE STYLE
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={21}
                  >
                    -
                  </td>
                  <td
                    className="border border-gray-300 p-2 text-center text-sm"
                    colSpan={5}
                  >
                    MC (STYLE III)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 联系我们CTA */}
        <div
          className="mt-16 animate-slide-up text-center"
          style={{ animationDelay: '0.8s' }}
        >
          <div className="mx-auto max-w-4xl rounded-apple-xl bg-gradient-to-r from-gray-50 to-gray-100 p-12">
            <h2 className="mb-6 font-display text-3xl font-bold text-gray-900 md:text-4xl">
              需要专业钻尾模具？
            </h2>
            <p className="mx-auto mb-8 max-w-2xl font-text text-xl text-gray-600">
              我们提供全系列钻尾模具产品，满足不同规格需求，为您的生产提供可靠保障
            </p>
            <Link href="/contact">
              <button className="apple-button bg-apple-blue px-8 py-4 text-lg font-semibold text-white hover:bg-apple-blue-dark hover:shadow-apple-blue">
                立即咨询报价
              </button>
            </Link>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Products;
