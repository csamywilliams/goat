import React, { Component } from 'react';
import { Hero, Section } from './MainPage.styles';
import { WaveSvg } from '../UIComponents/UIComponents.styles';

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

          <Section>
            <Hero>
              <Header />
            </Hero>
            <WaveSvg id="wave"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1300 30">
                  <path d="M -1 21 Q 345 -1 696 14 Q 1047 30 1397 5 L 1393 30 L -1 30 Z" fill="white"></path>
            </WaveSvg>
          </Section>
          <Section>
            <About />
          </Section>
          <Section>
            <WaveSvg id="wave"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1300 30">
                  <path d="M -1 21 Q 345 -1 696 14 Q 1047 30 1397 5 L 1393 30 L -1 30 Z" fill="white"></path>
            </WaveSvg>
            <Herd />
          </Section>
          <Facts />
          <ForSale />
          <Gallery />
          <Contact />
          <PageFooter />
        </main>
    );
  }
 
}

export default MainPage;