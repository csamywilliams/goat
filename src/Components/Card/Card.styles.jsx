import styled from 'styled-components';

export const Layout = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    border-radius: 10px;
    margin: 10px;
`;

export const Item = styled.div`
    color: ${props => props.theme.card.color};
    background-color: ${props => props.theme.card.content.bg};
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
    margin: 0;
`;

export const Img = styled.img`
    height: 100%;
    width: 50%;
    align-self: center;
    flex: 1;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
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
        margin-left: 1em;
    }
`;