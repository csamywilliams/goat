import styled from 'styled-components';

export const Hero = styled.div`
    width: 100%;
    height: 75vh;
    background: url(header.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    padding-bottom: 30px;
`;

export const HeroSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
`;

export const SaleSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    background: ${props => props.theme.sale.bg};
    color: ${props => props.theme.sale.color};
    padding-bottom: 30px;
`;

export const Slogan = styled.p`
    font-family: 'Satisfy', cursive;
    font-size: calc(2em + 2 * (100vw - 20em) / 50);
    color: ${props => props.theme.slogan.color};
    position: absolute;
    left: 0;
    right: 0;
    top: 25%;
`;