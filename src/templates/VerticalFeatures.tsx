import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="产品系列"
    description="东莞市众联达精密模具有限公司专业生产MB、MC系列钻尾模具，采用高速钢和铬钢材质，满足不同客户的工艺需求。"
  >
    <VerticalFeatureRow
      title="MB高速钢 钻尾模具"
      description="采用优质高速钢材质制造，具有优异的耐磨性和切削性能。适用于各种钻尾螺丝的精密成型，广泛应用于建筑和机械行业。"
      image="/assets/images/img_mould_mbhs01-min.jpg"
      imageAlt="MB高速钢钻尾模具产品展示"
    />
    <VerticalFeatureRow
      title="MB铬钢 钻尾模具"
      description="采用高品质铬钢材料，具有出色的硬度和耐久性。精密加工工艺确保产品尺寸精度，适合大批量生产需求。"
      image="/assets/images/img_mould_mbtub01-min.jpg"
      imageAlt="MB铬钢钻尾模具产品"
      reverse
    />
    <VerticalFeatureRow
      title="MC高速钢 钻尾模具"
      description="MC系列高速钢钻尾模具，结构设计合理，加工精度高。为客户提供稳定可靠的成型解决方案，确保产品质量一致性。"
      image="/assets/images/img_mould_mchs01-min.jpg"
      imageAlt="MC高速钢钻尾模具产品展示"
    />
  </Section>
);

export { VerticalFeatures };
