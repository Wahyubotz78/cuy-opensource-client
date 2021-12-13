export default {
  primaryDark: '#0D0C1D',
  primaryLight: '#EFFFFA',
  primaryHover: 'orange',
  mobile: '576px',
  colors: {
    primary: '#63d471',
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

