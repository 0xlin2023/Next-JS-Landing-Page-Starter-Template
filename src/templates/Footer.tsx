import Link from 'next/link';

import { Background } from '../background/Background';
import { CenteredFooter } from '../footer/CenteredFooter';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const Footer = () => (
  <Background color="bg-gray-100">
    <Section>
    <CenteredFooter logo={<Logo />}>
        <li>
          <Link href="/about">关于我们</Link>
        </li>
        <li>
          <Link href="/products">产品中心</Link>
        </li>
        <li>
          <Link href="/contact">联系我们</Link>
        </li>
      </CenteredFooter>
    </Section>
  </Background>
);

export { Footer };
