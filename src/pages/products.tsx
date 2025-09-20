import Link from 'next/link';
import { useMemo } from 'react';

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
          <p className="mx-auto max-w-4xl animate-slide-up font-text text-xl leading-normal tracking-wide text-gray-600 md:text-2xl">
            专业生产MB、MC系列钻尾模具，采用高速钢和铬钢材质，满足不同客户的工艺需求。为全球客户提供高质量、精准交货期的钻尾模具产品。
          </p>
        </div>

        {/* 产品工艺展示 */}
        <div
          className="mb-20 animate-slide-up text-center"
          style={{ animationDelay: '0.3s' }}
        >
          <div className="mx-auto max-w-6xl">
            <div className="relative rounded-apple-xl bg-gradient-to-b from-gray-50 to-white p-8 shadow-apple-lg">
              <div className="grid items-center gap-12 md:grid-cols-2">
                <div className="space-y-6">
                  <div className="rounded-apple-xl bg-white p-8 shadow-apple">
                    <div className="relative flex h-48 items-center justify-center rounded-apple bg-gradient-to-br from-apple-blue/10 to-apple-blue/5">
                      <div className="relative">
                        {/* 钻头示意图 */}
                        <div className="relative size-20 rounded-t-full bg-gradient-to-b from-gray-400 to-gray-600">
                          <div className="absolute left-1/2 top-0 h-16 w-2 -translate-x-1/2 rounded-full bg-gradient-to-b from-gray-300 to-gray-500"></div>
                          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-2">
                            <div className="size-6 rounded-full bg-gray-700"></div>
                          </div>
                        </div>
                        {/* 旋转指示 */}
                        <div className="absolute -right-8 top-1/2 -translate-y-1/2">
                          <svg
                            className="size-8 animate-spin text-apple-blue"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-bold text-gray-900">
                    钻尾螺丝成型工艺
                  </h3>
                  <p className="font-text text-gray-600">
                    精密钻头设计，确保螺丝尖端完美成型
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="rounded-apple-xl bg-white p-8 shadow-apple">
                    <div className="relative flex h-48 items-center justify-center rounded-apple bg-gradient-to-br from-orange-100 to-orange-50">
                      <div className="relative">
                        {/* 模具示意图 */}
                        <div className="relative h-16 w-32 overflow-hidden rounded-lg bg-gradient-to-b from-gray-500 to-gray-700">
                          <div className="absolute inset-x-2 top-2 h-3 rounded-sm bg-gradient-to-r from-orange-400 to-red-500"></div>
                          <div className="absolute bottom-2 left-1/2 size-8 -translate-x-1/2 rounded-full bg-gray-300"></div>
                          <div className="absolute left-1/2 top-1/2 h-8 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-800"></div>
                        </div>
                        {/* 温度指示 */}
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                          <div className="flex space-x-1">
                            <div className="h-4 w-1 animate-pulse rounded-full bg-orange-400"></div>
                            <div
                              className="h-3 w-1 animate-pulse rounded-full bg-red-400"
                              style={{ animationDelay: '0.2s' }}
                            ></div>
                            <div
                              className="h-5 w-1 animate-pulse rounded-full bg-yellow-400"
                              style={{ animationDelay: '0.4s' }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-bold text-gray-900">
                    精密模具加工过程
                  </h3>
                  <p className="font-text text-gray-600">
                    高温锻造，确保模具精度和耐用性
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 钻尾模具规格表 */}
        <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
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

        {/* 产品特色亮点 */}
        <div
          className="mt-32 animate-slide-up"
          style={{ animationDelay: '0.9s' }}
        >
          <h2 className="mb-16 text-center font-display text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            产品特色
          </h2>
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
            <div className="rounded-apple-xl bg-gray-50 p-8 text-center shadow-apple transition-colors duration-300 hover:bg-white hover:shadow-apple-lg">
              <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-apple bg-apple-blue">
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
              </div>
              <h3 className="mb-4 font-display text-xl font-bold text-gray-900">
                全球布局
              </h3>
              <p className="font-text text-gray-600">
                在钻尾模具领域具有全球性布局，取得行业领导地位
              </p>
            </div>
            <div className="rounded-apple-xl bg-gray-50 p-8 text-center shadow-apple transition-colors duration-300 hover:bg-white hover:shadow-apple-lg">
              <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-apple bg-apple-blue">
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
              </div>
              <h3 className="mb-4 font-display text-xl font-bold text-gray-900">
                精密制造
              </h3>
              <p className="font-text text-gray-600">
                精密治具与高准确度检验仪器，确保产品质量卓越
              </p>
            </div>
            <div className="rounded-apple-xl bg-gray-50 p-8 text-center shadow-apple transition-colors duration-300 hover:bg-white hover:shadow-apple-lg">
              <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-apple bg-apple-blue">
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-4 font-display text-xl font-bold text-gray-900">
                准时交付
              </h3>
              <p className="font-text text-gray-600">
                高效率生产排程，提供精准交货期和竞争力价格
              </p>
            </div>
          </div>
        </div>

        {/* 联系我们CTA */}
        <div
          className="mt-24 animate-slide-up text-center"
          style={{ animationDelay: '1.2s' }}
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
