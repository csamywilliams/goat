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
            <WaveSVG fill={theme.main.wave.herd.fill} />
          </Section>
          <Section>
            <Herd />
            {/* <WaveSVG /> */}
          </Section>
          {/* <Section>
            <Facts />
            <WaveSVG fill={theme.main.wave.facts.fill} /> 
          </Section> */}
          <SaleSection>
            <ForSale />
            <WaveSVG />
          </SaleSection>
          <Section >
            <Gallery />
            <WaveSVG fill={theme.main.wave.contact.fill} />
          </Section>
          <Contact />
          <PageFooter />
        </main>
    );
  }
 
}

export default MainPage;