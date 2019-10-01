import React, { Component } from 'react';
import { Layout, Cards } from './ForSale.styles';
import Card from '../Card/Card';

import data from "../../data";

class ForSale extends Component {

  render() {

    const cards = data.forsale.map((goat, id) => {
      return <Card key={id} name={goat.name} dob={goat.dob} price={goat.price} src={goat.src} gender={goat.gender}></Card>;
    });

    return (
        <Layout>
          <h2>For Sale</h2>
          <Cards>
            { cards }
          </Cards>
        </Layout>
    );
  }
 
}

export default ForSale;