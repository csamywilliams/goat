import React, { Component } from 'react';
import { Layout, Goats } from './Herd.styles';
import Goat from '../Goat/Goat';
import data from '../../data';

class Herd extends Component {

  render() {

    const items = data.goats.map((goat, id) => {
      return <Goat key={id} goat={goat} />
    }); 

    return (
        <Layout>
          <h2>Herd</h2>
          <Goats>
            {items}
          </Goats>
        </Layout>
    );
  }
 
}

export default Herd;