import styled from 'styled-components';

export const PrimaryButton = styled.button`
    border: 0;
    background-color: ${props => props.theme.button.primary.bg};
    color: ${props => props.theme.button.primary.color};
    padding: 10px 20px;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    border-radius: 20px;

    &:hover {
        background-color: ${props => props.theme.button.primary.hover.bg};
        color: ${props => props.theme.button.primary.hover.color};
        border: 1px solid ${props => props.theme.button.primary.hover.border};
    }

    &:after {
        content: "❯";
        margin-left: 1em;
    }
`;

export const SecondaryButton = styled.button`
    border: 0;
    background-color: ${props => props.theme.button.secondary.bg};
    color: ${props => props.theme.button.secondary.color};
    padding: 10px 20px;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    border-radius: 20px;

    &:hover {
        background-color: ${props => props.theme.button.secondary.hover.bg};
        color: ${props => props.theme.button.secondary.hover.color};
        border: 1px solid ${props => props.theme.button.secondary.hover.border};
    }
`;

export const WaveSvg = styled.svg`
    //fill: white;
    position: absolute;
    bottom: 0;
`;
