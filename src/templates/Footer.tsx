import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import { Background } from '../background/Background';
import { CenteredFooter } from '../footer/CenteredFooter';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Background color="bg-gray-100">
      <Section>
        <CenteredFooter logo={<Logo />}>
          <li>
            <Link href="/about">{t('navigation.about')}</Link>
          </li>
          <li>
            <Link href="/products">{t('navigation.products')}</Link>
          </li>
          <li>
            <Link href="/contact">{t('navigation.contact')}</Link>
          </li>
        </CenteredFooter>
      </Section>
    </Background>
  );
};

export { Footer };
