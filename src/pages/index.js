import React from 'react';
import Sound from 'react-sound';
import Layout from '../components/Layout';
import Landing from '../sections/Landing';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Writing from '../sections/Writing';
import Header from '../components/Header';
import Footer from '../components/Footer';

const IndexPage = () => (
  <Layout>
    <Header />
    <Landing />
    <About />
    <Projects />
    <Writing />
    <Footer />
    <Sound
      url="https://sites.google.com/site/aghosdghsdgkl/music.mp3"
      playStatus={Sound.status.PLAYING}
      volume={100}
      ignoreMobileRestrictions
    />
  </Layout>
);


export default IndexPage;
