import React from 'react';

import Layout from '../components/MyLayout';
import HomeBackground from '../components/HomeBackground';
import SecondHomeHero from '../components/SecondHomeHero';
import HeroQuote from '../components/HeroQuote';

export default () => (
  <Layout>
    <HomeBackground />
    <HeroQuote />
    <SecondHomeHero />
  </Layout>
);
