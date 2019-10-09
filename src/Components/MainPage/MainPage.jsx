import React, { Component } from 'react';
import { Hero, Section, HeroSection, Slogan, SaleSection } from './MainPage.styles';
import { WaveSVG } from '../UI/Utilities';
import theme from '../../theme';

import Header from '../Header/Header';
import About from '../About/About';
import Herd from '../Herd/Herd';
import Facts from '../Facts/Facts';
import ForSale from '../ForSale/ForSale';
import Gallery from '../Gallery/Gallery';
import Contact from '../Contact/Contact';
import PageFooter from '../PageFooter/PageFooter';

class MainPage extends Component {

  render() {

    return (
        <main>
          <HeroSection>
            <Hero>
              <Header />
              <Slogan>Oh Nay There</Slogan>
            </Hero>
            <WaveSVG />
          </HeroSection>
          <Section>
            <About />
            <WaveSVG />
          </Section>
          <Section>
            <Herd />
          </Section>
          <Section>
            <Facts />
            <WaveSVG fill={theme.main.wave.facts.fill} />
          </Section>
          <SaleSection>
            <ForSale />
          </SaleSection>
          <Gallery />
          <Contact />
          <PageFooter />
        </main>
    );
  }
 
}

export default MainPage;