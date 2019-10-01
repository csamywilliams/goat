
const paleOrange = '#EED093';
const beige = '#FBF8F3';
const green = '#8EBE68';
const brown = '#2D1710';
const white = '#fff';

const color1 = beige;
const color2 = paleOrange;
const color3 = green;
const color4 = beige;
const color5 = green;

const theme = {
    main: { 
        button: {
            primary: {
                bg: color5,
                color: white,
                hover: {
                    bg: white,
                    color: color5,
                    border: color5,
                }
            }
        },
        about: {
            bg: color2
        }, 
        herd: {
            bg: color2
        },
        facts: {
            bg: color2
        },
        card: {
            bg: color2
        },
        sale: {
            bg: color4,
            border: color2,
            content: {
                bg: color2
            }
        },
        gallery: {
            bg: color1
        },
        contact: {
            bg: color5
        },
        footer: {
                bg: color1,
                hooves: color2,
                svg: {
                    fill: color3
                }
        }

    }
};

export default theme;