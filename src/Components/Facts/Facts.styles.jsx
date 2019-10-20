import styled from 'styled-components';
import media from '../../Utilities/MediaQueries';

export const Layout = styled.div`
    background-color: ${props => props.theme.facts.bg};
    padding-bottom: 2%;
`;

export const Fact = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid ${props => props.theme.facts.border};
    background: ${props => props.theme.facts.border};
    width: 140px;
    height: 140px;
    border-radius: 50%;
    padding: 10px;
`;

export const FactLayout = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    ${media.phone`
        flex-direction: column;
    `}
`;