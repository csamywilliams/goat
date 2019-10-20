import styled from 'styled-components';
import media from '../../Utilities/MediaQueries';

export const Layout = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 75vw;
    margin: 0 auto;
    padding-bottom: 3%;

    ${media.tablet`
        flex-direction: column;
    `}

    ${media.phone`
        flex-direction: column;
    `}
`;

export const Header = styled.h2`
    color: ${props => props.theme.about.color};
`;

export const Image = styled.img`
    max-height: 500px;
`;