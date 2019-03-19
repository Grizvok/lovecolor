import React from 'react';

import Layout from '../components/MyLayout';
import HomeBackground from '../components/HomeBackground';
import SecondHomeHero from '../components/SecondHomeHero';
import HeroQuote from '../components/HeroQuote';
import Footer from '../components/Footer';

export default () => {
  return (
  <Layout>
    <HomeBackground />
    <HeroQuote />
    <SecondHomeHero />
    <Footer />
  </Layout>

)};
