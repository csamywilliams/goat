import styled from 'styled-components';
import media from '../../Utilities/MediaQueries';

export const Layout = styled.div`
    background-color: ${props => props.theme.sale.bg};
    width: 100%;
`;

export const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 33%);

    ${media.tablet`
        grid-template-columns: repeat(2, 50%);
    `}

    ${media.phone`
        display: flex;
        flex-direction: column;
    `}
`;