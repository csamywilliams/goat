import styled from 'styled-components';

export const Heading = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

export const Menu = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;
`;

export const Item = styled.li`

    width: auto;
    min-width: 135px;
    margin: 15px 0;
    text-transform: uppercase;
    font-weight: bold;

    &:first-child {
        &:before {
            color: transparent
        }
    }

    &:before {
        content: "✵";
        color: ${props => props.theme.menu.item.color};
        font-weight: bold;
        width: 0.5em;
        margin-right: 1em;
    }
`;

export const Logo = styled.div`
   
`;



export const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;