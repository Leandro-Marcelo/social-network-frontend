module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        colors: {
            hWhite: "hsl(252,30%,100%)",
            hLight: "hsl(252,30%,95%)",
            hGray: "hsl(252,15%,65%)",
            hPrimary: "hsl(252,75%,60%)",
            hSecondary: "hsl(252,100%,90%)",
            hSuccess: "hsl(120,95%,65%)",
            hDanger: "hsl(0,95%,65%)",
            hDark: "hsl(252,30%,17%)",
            hBlack: "hsl(252,30%,10%)",
        },
        screens: {
            530: "680px",
            680: "680px",
            992: "992px",
            1200: "1200px",
            1450: "1450px",
        },
        extend: {
            backgroundImage: {
                "story-img": "url('./assets/Home/images/story-2.jpg')",
            },
        },
    },
    plugins: [],
};

/* 
            hWhite: "transparent",
            hLight: "currentColor",
            hGray: "#ffffff",
            hPrimary: "#3f3cbb",
            hSecondary: "#121063",
            hSuccess: "#565584",
            hDanger: "#3ab7bf",
            hDark: "#ecebff",
            hBlack: "#78dcca",


*/
