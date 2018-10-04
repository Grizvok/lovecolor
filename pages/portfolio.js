import React from 'react';

import Layout from '../components/MyLayout';
import PortfolioBoard from '../components/PortfolioBoard';
import PortfolioHero from '../components/PortfolioHero';

export default () => (
  <Layout>
    <PortfolioHero />
    <PortfolioBoard />
  </Layout>
);