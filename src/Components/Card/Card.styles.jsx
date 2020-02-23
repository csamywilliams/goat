import styled from 'styled-components';

export const Layout = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    border-radius: 10px;
    margin: 10px;
    padding: 5px;
    background-color: ${props => props.theme.card.content.bg};
`;

export const Item = styled.div`
    color: ${props => props.theme.card.color};
    background-color: ${props => props.theme.card.content.bg};
    flex: 1;
    padding: 5px;
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
    margin: 0;
`;

export const Img = styled.img`
    width: 200px;
    height: 140px;
    align-self: center;
    flex: 1;
    padding-left: 5px;
`;

export const Button = styled.button`
    border: 0;
    background-color: ${props => props.theme.card.button.bg};
    color: ${props => props.theme.card.button.color};
    padding: 10px 20px;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    border-radius: 20px;
    border: 1px solid ${props => props.theme.card.button.border};

    &:hover {
        background-color: ${props => props.theme.card.button.hover.bg};
        color: ${props => props.theme.card.button.hover.color};
        border: 1px solid ${props => props.theme.card.button.hover.border};
    }

    &:after {
        content: "❯";
    }
`;