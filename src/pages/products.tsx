import Link from 'next/link';

import { Background } from '../background/Background';
import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Meta } from '../layout/Meta';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Footer } from '../templates/Footer';
import { Logo } from '../templates/Logo';
import { AppConfig } from '../utils/AppConfig';

const Products = () => (
  <div className="bg-white font-text text-gray-600 antialiased selection:bg-apple-blue/10 selection:text-apple-blue">
    <Meta
      title={`产品中心 - ${AppConfig.title}`}
      description="东莞市众联达精密模具产品系列：MB高速钢钻尾模具、MB铬钢钻尾模具、MC高速钢钻尾模具等精密模具产品。"
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
          产品中心
        </h1>
        <p className="mx-auto max-w-4xl animate-slide-up font-text text-xl leading-normal tracking-wide text-gray-600 md:text-2xl">
          东莞市众联达精密模具有限公司专业生产MB、MC系列钻尾模具，采用高速钢和铬钢材质，满足不同客户的工艺需求。我们致力于为客户提供最优质的精密模具解决方案。
        </p>
      </div>

      <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
        <VerticalFeatureRow
          title="MB高速钢 钻尾模具"
          description="采用优质高速钢材质制造，具有优异的耐磨性和切削性能。适用于各种钻尾螺丝的精密成型，广泛应用于建筑和机械行业。产品经过精密加工，确保每一个细节都达到行业最高标准。"
          image="/assets/images/img_mould_mbhs01-min.jpg"
          imageAlt="MB高速钢钻尾模具产品展示"
        />
        <VerticalFeatureRow
          title="MB铬钢 钻尾模具"
          description="采用高品质铬钢材料，具有出色的硬度和耐久性。精密加工工艺确保产品尺寸精度，适合大批量生产需求。铬钢材质提供更长的使用寿命和更稳定的性能表现。"
          image="/assets/images/img_mould_mbtub01-min.jpg"
          imageAlt="MB铬钢钻尾模具产品"
          reverse
        />
        <VerticalFeatureRow
          title="MC高速钢 钻尾模具"
          description="MC系列高速钢钻尾模具，结构设计合理，加工精度高。为客户提供稳定可靠的成型解决方案，确保产品质量一致性。适用于各种复杂工况下的精密成型需求。"
          image="/assets/images/img_mould_mchs01-min.jpg"
          imageAlt="MC高速钢钻尾模具产品展示"
        />
      </div>

      {/* 产品特色亮点 */}
      <div
        className="mt-32 animate-slide-up"
        style={{ animationDelay: '0.6s' }}
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
              精密加工
            </h3>
            <p className="font-text text-gray-600">
              采用先进的加工设备和工艺，确保每个产品都达到精密标准
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
              高效耐用
            </h3>
            <p className="font-text text-gray-600">
              优质材质配合精密工艺，提供长久的使用寿命和稳定性能
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
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h3 className="mb-4 font-display text-xl font-bold text-gray-900">
              贴心服务
            </h3>
            <p className="font-text text-gray-600">
              专业团队提供全方位技术支持和售后服务保障
            </p>
          </div>
        </div>
      </div>

      {/* 联系我们CTA */}
      <div
        className="mt-24 animate-slide-up text-center"
        style={{ animationDelay: '0.9s' }}
      >
        <div className="mx-auto max-w-4xl rounded-apple-xl bg-gradient-to-r from-gray-50 to-gray-100 p-12">
          <h2 className="mb-6 font-display text-3xl font-bold text-gray-900 md:text-4xl">
            需要定制模具解决方案？
          </h2>
          <p className="mx-auto mb-8 max-w-2xl font-text text-xl text-gray-600">
            我们的专业团队随时为您提供个性化的模具设计和生产服务
          </p>
          <Link href="/contact">
            <button className="apple-button bg-apple-blue px-8 py-4 text-lg font-semibold text-white hover:bg-apple-blue-dark hover:shadow-apple-blue">
              立即咨询
            </button>
          </Link>
        </div>
      </div>
    </Section>

    <Footer />
  </div>
);

export default Products;
