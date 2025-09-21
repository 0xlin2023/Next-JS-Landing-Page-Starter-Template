import Image from 'next/image';

import { Section } from '@/layout/Section';

const Sponsors = () => (
  <Section
    title="产品展示"
    description="众联达精密模具产品系列，专业生产MB、MC系列钻尾（自攻）螺丝模具，满足不同客户需求。"
  >
    <table className="mx-auto border-collapse">
      <tbody>
        <tr className="h-56">
          <td className="border-2 border-gray-300 p-3 text-center">
            <Image
              src="/assets/images/img_mould_mbhs01-min.jpg"
              alt="MB高速钢钻尾模具"
              width={200}
              height={150}
              className="mx-auto rounded object-cover"
            />
            <p className="mt-2 text-sm font-medium text-gray-800">
              MB高速钢 钻尾模具
            </p>
          </td>
          <td className="border-2 border-gray-300 p-3 text-center">
            <Image
              src="/assets/images/img_mould_mbhs02-min.jpg"
              alt="MB高速钢钻尾模具"
              width={200}
              height={150}
              className="mx-auto rounded object-cover"
            />
            <p className="mt-2 text-sm font-medium text-gray-800">
              MB高速钢 钻尾模具
            </p>
          </td>
          <td className="border-2 border-gray-300 p-3 text-center">
            <Image
              src="/assets/images/img_mould_mbtub01-min.jpg"
              alt="MB铬钢钻尾模具"
              width={200}
              height={150}
              className="mx-auto rounded object-cover"
            />
            <p className="mt-2 text-sm font-medium text-gray-800">
              MB铬钢 钻尾模具
            </p>
          </td>
        </tr>
        <tr className="h-56">
          <td className="border-2 border-gray-300 p-3 text-center">
            <Image
              src="/assets/images/img_mould_mbtub02-min.jpg"
              alt="MB铬钢钻尾模具"
              width={200}
              height={150}
              className="mx-auto rounded object-cover"
            />
            <p className="mt-2 text-sm font-medium text-gray-800">
              MB铬钢 钻尾模具
            </p>
          </td>
          <td className="border-2 border-gray-300 p-3 text-center">
            <Image
              src="/assets/images/img_mould_mbtub04-min.jpg"
              alt="MB高速钢钻尾模具"
              width={200}
              height={150}
              className="mx-auto rounded object-cover"
            />
            <p className="mt-2 text-sm font-medium text-gray-800">
              MB高速钢 钻尾模具
            </p>
          </td>
          <td className="border-2 border-gray-300 p-3 text-center">
            <Image
              src="/assets/images/img_mould_mchs01-min.jpg"
              alt="MC高速钢钻尾模具"
              width={200}
              height={150}
              className="mx-auto rounded object-cover"
            />
            <p className="mt-2 text-sm font-medium text-gray-800">
              MC高速钢 钻尾模具
            </p>
          </td>
        </tr>
        <tr className="h-56">
          <td className="border-2 border-gray-300 p-3 text-center">
            <Image
              src="/assets/images/img_mould_mchs02-min.jpg"
              alt="MC高速钢钻尾模具"
              width={200}
              height={150}
              className="mx-auto rounded object-cover"
            />
            <p className="mt-2 text-sm font-medium text-gray-800">
              MC高速钢 钻尾模具
            </p>
          </td>
          <td className="border-2 border-gray-300 p-3">{/* 空白格子 */}</td>
          <td className="border-2 border-gray-300 p-3">{/* 空白格子 */}</td>
        </tr>
      </tbody>
    </table>
  </Section>
);

export { Sponsors };
