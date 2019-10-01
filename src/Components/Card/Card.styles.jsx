import styled from 'styled-components';

export const Layout = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    border: 1px solid ${props => props.theme.sale.border};
    border-radius: 10px;
    margin: 10px;
    min-height: 250px;
`;

export const Item = styled.div`
    background-color: ${props => props.theme.sale.content.bg};
    flex: 1;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
`;

export const Name = styled.h3`
    text-transform: capitalize;
`;

export const Price = styled.p`
    font-weight: bold;
`

export const GenderLayout = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center; 
    justify-content: center;
`

export const Gender = styled.p`
    text-transform: capitalize;
    padding: 0 5px;
`;

export const Img = styled.img`
    width: 50%;
    border-radius: 10px;
    align-self: center;
    flex: 1;
    margin: 10px 20px;
`;
