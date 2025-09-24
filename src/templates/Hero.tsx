import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <Background color="bg-gray-50">
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl />}>
          <li>
            <Link
              href="/about"
              className="font-text text-base font-medium text-gray-700 transition-colors duration-200 hover:text-apple-blue"
            >
              {t('navigation.about')}
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="font-text text-base font-medium text-gray-700 transition-colors duration-200 hover:text-apple-blue"
            >
              {t('navigation.products')}
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
              {t('navigation.contact')}
            </Link>
          </li>
        </NavbarTwoColumns>
      </Section>

      <Section yPadding="pt-24 pb-32 md:pt-32 md:pb-40">
        <HeroOneButton
          title={
            <>
              {t('hero.title')}
              <span className="bg-gradient-to-r from-apple-blue to-apple-blue-light bg-clip-text text-transparent">
                {' '}
              </span>
            </>
          }
          description={t('hero.description')}
          button={
            <Link href="/contact">
              <Button xl>{t('hero.button')}</Button>
            </Link>
          }
        />
      </Section>
    </Background>
  );
};

export { Hero };
