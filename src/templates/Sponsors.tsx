import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import { Section } from '@/layout/Section';

const Sponsors = () => {
  const { t } = useTranslation();

  return (
    <Section
      title={t('sponsors.title')}
      description={t('sponsors.description')}
    >
      <table className="mx-auto border-collapse">
        <tbody>
          <tr className="h-56">
            <td className="border-2 border-gray-300 p-3 text-center">
              <Image
                src="/assets/images/img_mould_mbhs01-min.jpg"
                alt={t('sponsors.products.mbhs')}
                width={200}
                height={150}
                className="mx-auto rounded object-cover"
              />
              <p className="mt-2 text-sm font-medium text-gray-800">
                {t('sponsors.products.mbhs')}
              </p>
            </td>
            <td className="border-2 border-gray-300 p-3 text-center">
              <Image
                src="/assets/images/img_mould_mbhs02-min.jpg"
                alt={t('sponsors.products.mbhs')}
                width={200}
                height={150}
                className="mx-auto rounded object-cover"
              />
              <p className="mt-2 text-sm font-medium text-gray-800">
                {t('sponsors.products.mbhs')}
              </p>
            </td>
            <td className="border-2 border-gray-300 p-3 text-center">
              <Image
                src="/assets/images/img_mould_mbtub01-min.jpg"
                alt={t('sponsors.products.mbtub')}
                width={200}
                height={150}
                className="mx-auto rounded object-cover"
              />
              <p className="mt-2 text-sm font-medium text-gray-800">
                {t('sponsors.products.mbtub')}
              </p>
            </td>
          </tr>
          <tr className="h-56">
            <td className="border-2 border-gray-300 p-3 text-center">
              <Image
                src="/assets/images/img_mould_mbtub02-min.jpg"
                alt={t('sponsors.products.mbtub')}
                width={200}
                height={150}
                className="mx-auto rounded object-cover"
              />
              <p className="mt-2 text-sm font-medium text-gray-800">
                {t('sponsors.products.mbtub')}
              </p>
            </td>
            <td className="border-2 border-gray-300 p-3 text-center">
              <Image
                src="/assets/images/img_mould_mbtub04-min.jpg"
                alt={t('sponsors.products.mbhs')}
                width={200}
                height={150}
                className="mx-auto rounded object-cover"
              />
              <p className="mt-2 text-sm font-medium text-gray-800">
                {t('sponsors.products.mbhs')}
              </p>
            </td>
            <td className="border-2 border-gray-300 p-3 text-center">
              <Image
                src="/assets/images/img_mould_mchs01-min.jpg"
                alt={t('sponsors.products.mchs')}
                width={200}
                height={150}
                className="mx-auto rounded object-cover"
              />
              <p className="mt-2 text-sm font-medium text-gray-800">
                {t('sponsors.products.mchs')}
              </p>
            </td>
          </tr>
          <tr className="h-56">
            <td className="border-2 border-gray-300 p-3 text-center">
              <Image
                src="/assets/images/img_mould_mchs02-min.jpg"
                alt={t('sponsors.products.mchs')}
                width={200}
                height={150}
                className="mx-auto rounded object-cover"
              />
              <p className="mt-2 text-sm font-medium text-gray-800">
                {t('sponsors.products.mchs')}
              </p>
            </td>
            <td className="border-2 border-gray-300 p-3">{/* 空白格子 */}</td>
            <td className="border-2 border-gray-300 p-3">{/* 空白格子 */}</td>
          </tr>
        </tbody>
      </table>
    </Section>
  );
};

export { Sponsors };
