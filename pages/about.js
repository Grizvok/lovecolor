//npm packages
import React from "react";

//our packages
import Layout from "../components/MyLayout";
import AboutHero from '../components/AboutHero';
import BiographyHero from '../components/BiographyHero';

export default () => (
  <Layout>
    <AboutHero />
    <BiographyHero />
  </Layout>
);
