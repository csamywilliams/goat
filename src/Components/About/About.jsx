import React, { Component } from 'react';
import { Layout, Header, Flex, Image } from './About.styles';
import aboutImg from '../../Assets/Images/about.png';

class About extends Component {

  render() {

    return (
        <Layout>
            <div>
              <Header>About</Header>
              <p>Our story begins in the little town of Neath, South Wales. Situated on top of a hill overlooking Port Talbot and Swansea bay.</p>
              <p>There on that hill lies a little smallholding which is home to the Prancing Anglo-Nubian herd. </p>
              <p>The Anglo-Nubian is a large domestic species of goat, with there identifying feature of pronounced "roman" nose and long drooping ears. </p>
              <p>Our herd consists of 3 fabulous milkers, a faithful friend and a billy goat named Gruff. </p>
            </div>
            <Image src={aboutImg} alt="" />

        </Layout>
    );
  }
 
}

export default About;