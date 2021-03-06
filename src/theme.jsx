const color0 = '#FFF';
const color1 = '#7D2531';
const color2 = '#591A22';
const color3 = '#EE6A77';
const color4 = '#569343';
const color5 = '#4A7D3A';
const color6 = '#D7C384';
const color7 = '#2E2F3E';

const theme = {
    main: { 
        body: {
            font: {
                color: color7
            },
        },
        slogan: {
            color: color4
        },
        button: {
            primary: {
                bg: color1,
                color: color0,
                hover: {
                    bg: color0,
                    color: color2,
                    border: color2,
                }
            },
            secondary: {
                bg: color0,
                color: color1,
                hover: {
                    bg: color2,
                    color: color0,
                    border: color2,
                }
            },
            send: {
                bg: color4,
                color: color0,
                hover: {
                    bg: color0,
                    color: color4,
                    border: color4,
                }
            },
        },
        menu: {
            item: {
                color: color3,
            }
        },
        about: {
            bg: color0,
            color: color4
        }, 
        heads: {
            bg: color0,
            color: color7,
            shadow: color2
        },
        herd: {
            bg: color1,
            color: color0
        },
        facts: {
            bg: color0,
            border: color6
        },
        card: {
            bg: color0,
            color: color7,
            content: {
                bg: color0,
                border: color1
            },
            button: {
                bg: color0,
                color: color5,
                border: color5,
                hover: {
                    bg: color5,
                    color: color0,
                    border: color0,
                }
            }
        },
        sale: {
            color: color0,
            bg: color4
        },
        gallery: {
            bg: color0
        },
        contact: {
            bg: color1,
            color: color0,
            form: {
                header: color7,
                bg: color0,
                border: color7
            }
        },
        footer: {
            bg: color2,
            color: color0
        },
        wave: {
            default: color0,
            facts: {
                fill: color4
            },
            herd: {
                fill: color1
            },
            contact: {
                fill: color1
            }
        }

    }
};

export default theme;