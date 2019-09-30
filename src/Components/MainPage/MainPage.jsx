import React, { Component } from 'react';
import styled from 'styled-components';

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
          <h2>Facts</h2>
          <h2>For Sale</h2>
          <h2>Gallery</h2>
          <Gallery />
          <Contact />
          <PageFooter />
        </main>
    );
  }
 
}

export default MainPage;