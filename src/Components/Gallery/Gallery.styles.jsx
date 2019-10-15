import styled from 'styled-components';

export const Layout = styled.div`
    background-color: ${props => props.theme.gallery.bg};
`;

export const GalleryGrid = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(1, 1fr);
    width: 50vw;
    margin: 0 auto;
`;

export const Item = styled.img`
    width: 100%;
`;

export const ItemC = styled.img`
    grid-column: 3 / span 2;
    grid-row: 1 / span 2;
    width: 100%;
`;

export const ItemD = styled.img`
    grid-column: 1 / span 2;
    grid-row: 2 / span 2;
    width: 100%;
`;