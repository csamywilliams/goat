import styled from 'styled-components';

export const Layout = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    padding: 10px;
    border: 1px solid ${props => props.theme.sale.border};
    margin: 10px;
    min-height: 200px;
`;

export const Item = styled.div`
    align-self: center;
    flex: 1;
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
`