import React, { Component } from 'react';
import { Logo, Heading, Menu, Item} from './Header.styles';

import background from '../../Assets/Images/header-min.jpg';

class Header extends Component {

  render() {

    return (
      <Heading>
        <Logo>
          The Prancing Anglo-Nubian
        </Logo>
        <Menu>
          <Item>About</Item>
          <Item>The Herd</Item>
          <Item>For Sale</Item>
          <Item>Gallery</Item>
          <Item>Contact</Item>
        </Menu>
      </Heading>
    );
  }
 
}

export default Header;