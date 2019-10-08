import styled from 'styled-components';

export const Layout = styled.footer`
    height: 100%;
    background-color: ${props => props.theme.footer.bg};
    color: ${props => props.theme.footer.color};
`;

export const Copyright = styled.p`
    margin: 0;
    padding: 10px;
`;
