import React, { Component } from 'react';
import { Layout, Head, Name } from './Goat.styles';

class Goat extends Component {

  render() {

    const altText = `Goat image of ${this.props.goat.name}`;

    return (
        <Layout>
          <Head src={this.props.goat.image} alt={altText} />
          <Name>{this.props.goat.name}</Name>
        </Layout>
    );
  }
 
}

export default Goat;