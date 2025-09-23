import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
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
            className="font-text text-base font-medium text-gray-700 transition-colors duration-200 hover:text-apple-blue"
            onClick={(e) => {
              // 确保移动端能正常跳转
              if (window.innerWidth < 768) {
                e.preventDefault();
                window.location.href = '/contact';
              }
            }}
          >
            联系我们
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-24 pb-32 md:pt-32 md:pb-40">
      <HeroOneButton
        title={
          <>
            {'专业精密模具制造商\n'}
            <span className="bg-gradient-to-r from-apple-blue to-apple-blue-light bg-clip-text text-transparent">
              众联达模具
            </span>
          </>
        }
        description="专业生产销售钻尾（自攻）螺丝模具、组合模具等，为您提供高品质的精密模具解决方案。精益求精，追求卓越，为客户创造更大价值。"
        button={
          <Link href="/contact">
            <Button xl>联系我们</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
