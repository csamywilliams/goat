import styled from 'styled-components';
import media from '../../Utilities/MediaQueries';

export const Layout = styled.div`
    background-color: ${props => props.theme.herd.bg};
    color: ${props => props.theme.herd.color};
    padding-bottom: 5%;
`;

export const Goats = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    ${media.phone`
        flex-direction: column;
    `}
`;