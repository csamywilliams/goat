import React, { Component } from 'react';
import { Layout, GalleryGrid, Item, ItemC, ItemD} from './Gallery.styles';

import image1 from '../../Assets/Images/goat1.JPG';
import image2 from '../../Assets/Images/goat2.JPG';
import image3 from '../../Assets/Images/goat8.JPG';
import image4 from '../../Assets/Images/goat10.JPG';
import image5 from '../../Assets/Images/goat5.JPG';
import image6 from '../../Assets/Images/goat6.JPG';

class Gallery extends Component {

  render() {

    return (
        <Layout>
          <h2>Gallery</h2>
          <GalleryGrid>
            <Item src={image1} alt="Goat 1" />
            <Item src={image2} alt="Goat 2" />
            <ItemC src={image3} alt="Goat 3" />
            <ItemD src={image4} alt="Goat 4" />
            <Item src={image5} alt="Goat 5" />
            <Item src={image6} alt="Goat 6" />
          </GalleryGrid>
        </Layout>
    );
  }
 
}

export default Gallery;