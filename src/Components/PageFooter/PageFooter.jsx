import React, { Component } from 'react';
import { Layout, Copyright } from './PageFooter.styles';

class PageFooter extends Component {

  render() {

    const date = new Date();
    const year = date.getFullYear();

    return (
        <Layout>
          <Copyright>&copy; { year } The Prancing Anglo-Nubian design by Amy Williams. All rights reserved.</Copyright>
        </Layout>
    );
  }
 
}

export default PageFooter;