import styled from 'styled-components';

export const Layout = styled.div`
    position: relative;
    margin: 5px;
`;

export const Head = styled.img`
    border-radius: 50%;
    width: 200px;
    height: 200px;
`;

export const Name = styled.h3`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${props => props.theme.heads.bg};
    color: ${props => props.theme.heads.color};
    padding: 5px;
    width: 100px;
    height: 35px;
    margin: 0 auto;
    -webkit-box-shadow: 0 0 2px 2px ${props => props.theme.heads.shadow}; /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
    -moz-box-shadow:    0 0 2px 2px ${props => props.theme.heads.shadow};  /* Firefox 3.5 - 3.6 */
    box-shadow:         0 0 2px 2px ${props => props.theme.heads.shadow};
`;