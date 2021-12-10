export default {
  colors: {
    primary: '#63d471'
  },
  typography: {
    fontFamily: "Poppins",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [
          {
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontDisplay: "swap",
            fontWeight: 400,
          },
        ],
      },
    },
  },
}

