import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Sponsors } from './Sponsors';

const Base = () => (
  <div className="bg-white font-text text-gray-600 antialiased selection:bg-apple-blue/10 selection:text-apple-blue">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <Sponsors />
    <Banner />
    <Footer />
  </div>
);

export { Base };
