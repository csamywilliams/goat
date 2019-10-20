import styled from 'styled-components';
import media from '../../Utilities/MediaQueries';

export const Layout = styled.div`
    background-color: ${props => props.theme.contact.bg};
    color: ${props => props.theme.contact.color};
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    flex: .5;
    margin: 10px;
    background-color: ${props => props.theme.contact.form.bg};
    border-radius: 5px;
    align-items: center;

    ${media.phone`
        flex: 1;
    `}

    ${media.tablet`
        flex: 1;
    `}
`;

export const H3 = styled.h3`
    color: ${props => props.theme.contact.form.header};
`;

export const Input = styled.input`
    margin: 10px;
    height: 20%;
    width: 95%;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid ${props => props.theme.contact.form.border};
`;

export const Textarea = styled.textarea`
    margin: 10px;
    padding: 5px 5px 5px 10px;
    border-radius: 5px;
    width: 95%;
    border: 1px solid  ${props => props.theme.contact.form.border};
`;

export const SendButton = styled.button`
    border: 0;
    background-color: ${props => props.theme.button.send.bg};
    color: ${props => props.theme.button.send.color};
    padding: 10px 20px;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    width: 200px;
    margin: 10px;

    &:hover {
        background-color: ${props => props.theme.button.send.hover.bg};
        color: ${props => props.theme.button.send.hover.color};
        border: 1px solid ${props => props.theme.button.send.hover.border};
    }
`;