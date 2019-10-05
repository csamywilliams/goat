import React, { Component } from 'react';
import styled from 'styled-components';

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
          <Header />
          <h1>The Prancing Anglo-Nubian</h1>
          <p>Oh Nay there!</p>
          <About />
          <Herd />
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