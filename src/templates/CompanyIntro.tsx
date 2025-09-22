import { Section } from '@/layout/Section';

const CompanyIntro = () => (
  <Section yPadding="py-20">
    <div className="relative mx-auto max-w-7xl overflow-hidden rounded-apple-xl bg-gradient-to-br from-gray-50 via-white to-gray-100 shadow-apple-xl">
      {/* 背景装饰元素 */}
      <div className="absolute -right-32 -top-32 size-64 rounded-full bg-apple-blue/5"></div>
      <div className="absolute -bottom-16 -left-16 size-48 rounded-full bg-apple-blue/10"></div>
      <div className="absolute right-1/4 top-1/4 size-32 rounded-full bg-gradient-to-r from-apple-blue/5 to-transparent"></div>

      {/* 主内容区域 */}
      <div className="relative px-8 py-16 md:px-16 md:py-20">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* 左侧：文字内容 */}
          <div className="space-y-8">
            {/* 标题区域 */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-apple-blue/10 px-4 py-2 text-sm font-semibold text-apple-blue">
                <div className="size-2 rounded-full bg-apple-blue"></div>
                企业介绍
              </div>

              <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                <span className="text-apple-blue">众联达</span>
                <br />
                精密模具
              </h2>

              <p className="text-xl font-medium text-gray-600 md:text-2xl">
                专业制造钻尾（自攻）螺丝模具的领先企业
              </p>
            </div>

            {/* 描述文本 */}
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                众联达模具有限公司是一家专业制造钻尾（自攻）螺丝模具的企业，产品涵盖
                <span className="font-semibold text-gray-900">
                  普通碳钢、不锈钢及复合螺丝
                </span>
                所需的钻尾（自攻）螺丝模具，能够帮助行业应对高技术难度的钻尾（自攻）螺丝生产。
              </p>

              <p>
                公司拥有丰富的行业经验，长期以来不断获得业内认可，并被指定为多家客户的钻尾（自攻）螺丝模具供应商。
              </p>

              <p>
                目前，众联达模具已在中国大陆市场建立了较大规模的合作基础，并积极拓展
                <span className="font-semibold text-apple-blue">
                  欧美及亚洲等高需求市场
                </span>
                ， 将中国优质的钻尾（自攻）螺丝模具推广至全球。
              </p>
            </div>

            {/* 特色亮点 */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-apple bg-white p-4 shadow-apple">
                <div className="flex size-10 items-center justify-center rounded-full bg-apple-blue/10">
                  <svg
                    className="size-5 text-apple-blue"
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
                <div>
                  <p className="font-semibold text-gray-900">专业制造</p>
                  <p className="text-sm text-gray-600">钻尾（自攻）螺丝模具</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-apple bg-white p-4 shadow-apple">
                <div className="flex size-10 items-center justify-center rounded-full bg-apple-blue/10">
                  <svg
                    className="size-5 text-apple-blue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">全球市场</p>
                  <p className="text-sm text-gray-600">欧美亚洲拓展</p>
                </div>
              </div>
            </div>
          </div>

          {/* 右侧：视觉元素 */}
          <div className="relative">
            {/* 主要装饰图形 */}
            <div className="relative h-96 lg:h-full">
              {/* 背景网格 */}
              <div className="absolute inset-0 opacity-20">
                <svg className="size-full" viewBox="0 0 100 100" fill="none">
                  <defs>
                    <pattern
                      id="grid"
                      width="10"
                      height="10"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 10 0 L 0 0 0 10"
                        fill="none"
                        stroke="#1e40af"
                        strokeWidth="0.5"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>

              {/* 几何装饰元素 */}
              <div className="absolute left-1/4 top-1/4 size-32 rounded-full bg-gradient-to-br from-apple-blue/20 to-apple-blue/5 backdrop-blur-sm"></div>
              <div className="absolute bottom-1/4 right-1/4 size-24 rotate-45 rounded-apple bg-gradient-to-br from-apple-blue/15 to-transparent"></div>
              <div className="absolute right-1/3 top-1/3 size-16 rounded-full border-4 border-apple-blue/20"></div>

              {/* 中心装饰图形 */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative size-48">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-apple-blue/20 via-apple-blue/10 to-transparent backdrop-blur-sm"></div>
                  <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-white/80 to-white/40 backdrop-blur-sm"></div>
                  <div className="absolute inset-8 flex items-center justify-center rounded-full bg-apple-blue/10">
                    <svg
                      className="size-20 text-apple-blue"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* 浮动粒子效果 */}
              <div className="left-1/6 absolute top-3/4 size-3 animate-pulse rounded-full bg-apple-blue/40"></div>
              <div
                className="right-1/6 top-1/6 absolute size-2 animate-pulse rounded-full bg-apple-blue/60"
                style={{ animationDelay: '1s' }}
              ></div>
              <div
                className="absolute left-3/4 top-2/3 size-4 animate-pulse rounded-full bg-apple-blue/30"
                style={{ animationDelay: '2s' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export { CompanyIntro };
