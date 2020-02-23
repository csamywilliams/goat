import React, { Component } from 'react';
import { Layout, Item, Name, Price, Img, Gender, GenderLayout, Button } from './Card.styles';
import { FaMars, FaVenus } from 'react-icons/fa';

class Card extends Component {

  render() {

    const altText = `Goat image of ${this.props.name}`;
    const GenderIcon = this.props.gender === "female" ? FaVenus : FaMars;
    
    return (
        <Layout>

          <Img src={this.props.src} alt={altText} />
          <Item>
            <Name>{this.props.name}</Name>
            <p>Born: {this.props.dob}</p>
            <GenderLayout>
              <Gender>{this.props.gender}</Gender>
              <GenderIcon/>
            </GenderLayout>
            <Price>£{this.props.price}</Price>
            <Button className={this.props.name}></Button>
          </Item>
        </Layout>
    );
  }
 
}

export default Card;