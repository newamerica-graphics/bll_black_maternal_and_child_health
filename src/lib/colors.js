const colors = {
  white: "#FFFFFF",
  black: "#2c2f35",
  grey: {
    chart_background: "#EFEFEF",
    lightest: "#EAEAEA",
    light: "#D6D6D6",
    medium: "#A3A3A3",
    dark: "#717171",
    darker: "#515151",
    darkest: "#333333",
  },
  teal: {
    lightest: "#BAEEEA",
    light: "#77D6D0",
    medium: "#2FBCB3",
    dark: "#209B93",
    darker: "#107C74",
    darkest: "#005E57",
  },
  blue: {
    lightest: "#A0CBED",
    light: "#5DA7E4",
    medium: "#1185E0",
    dark: "#0E6DB6",
    darker: "#055795",
    darkest: "#004275",
  },
  red: {
    lightest: "#FFB9BC",
    light: "#FE7F85",
    // medium: "#F33F47", too bright
    medium: "#eb4a52",
    dark: "#D83136",
    darker: "#C01E22",
    darkest: "#AB0009",
  },
  purple: {
    lightest: "#EFD2F5",
    light: "#D7A8E0",
    medium: "#BF7ECC",
    dark: "#A664B3",
    darker: "#8D4A9B",
    darkest: "#743083",
  },
  brown: {
    lightest: "#E0BC92",
    light: "#C99151",
    medium: "#AC5E06",
    dark: "#904E04",
    darker: "#743F03",
    darkest: "#5A3000",
  },
}

function getDefaultColor(code) {
  return colors[code].medium;
}

export { colors, getDefaultColor };
