import {css} from 'styled-components';

const sizes = {
    largeScreen: 1824,
    desktop: 1224,
    laptop: 900,
    tablet: 768,
    phone: 576,
}
  
// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
        ${css(...args)}
    }
`

    return acc
}, {});

export default media;