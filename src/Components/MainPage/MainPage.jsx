import React, { Component } from 'react';
import styled from 'styled-components';

import Facts from '../Facts/Facts';
import ForSale from '../ForSale/ForSale';
import Gallery from '../Gallery/Gallery';
import Contact from '../Contact/Contact';
import PageFooter from '../PageFooter/PageFooter';

class MainPage extends Component {

  render() {

    return (
        <main>
          <h1>The Prancing Anglo-Nubian</h1>
          <p>Oh Nay there!</p>
          <h2>About</h2>
          <h2>The Herd</h2>
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