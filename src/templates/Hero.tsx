import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/about">关于我们</Link>
        </li>
        <li>
          <Link href="/products">产品中心</Link>
        </li>
        <li>
          <Link href="/contact">联系我们</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'专业精密模具制造商\n'}
            <span className="text-primary-500">众联达模具</span>
          </>
        }
        description="专业生产销售钻尾螺丝模具、组合模具等，为您提供高品质的精密模具解决方案。"
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
