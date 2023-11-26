const colorPaletteLightMode = {
  primary: {
    50: "#E1FAE1",
    100: "#C7F5C7",
    200: "#90EB8E",
    300: "#58E156",
    400: "#26CC24",
    500: "#1C951A", // baseColor
    600: "#167514",
    700: "#115B10",
    800: "#0B3D0B",
    900: "#061E05",
    950: "#020D02"
  },
  yellow: {
    50: "#FCF8E3",
    100: "#FAF1CC",
    200: "#F4E394",
    300: "#EFD561",
    400: "#EAC62A",
    500: "#C6A514", // baseColor
    600: "#9E8410",
    700: "#78650C",
    800: "#4F4208",
    900: "#2A2304",
    950: "#130F02"
  }
};

const colorPaletteDarkMode = {
  primary: {
    50: "#E1FAE1",
    100: "#061E05",
    200: "#90EB8E",
    300: "#58E156",
    400: "#26CC24",
    500: "#1C951A", // baseColor
    600: "#167514",
    700: "#115B10",
    800: "#0B3D0B",
    900: "#061E05",
    950: "#020D02"
  },
  yellow: {
    50: "#FCF8E3",
    100: "#FAF1CC",
    200: "#F4E394",
    300: "#EFD561",
    400: "#EAC62A",
    500: "#C6A514", // baseColor
    600: "#9E8410",
    700: "#78650C",
    800: "#4F4208",
    900: "#2A2304",
    950: "#130F02"
  }
};

const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          background: "#FFFFFF",
          foreground: "#11181C",
          primary: colorPaletteLightMode.primary,
          yellow: colorPaletteLightMode.yellow,
        },
      },
      dark: {
        colors: {
          background: "#000000",
          foreground: "#ECEDEE",
          primary: colorPaletteDarkMode.primary,
          yellow: colorPaletteDarkMode.yellow,
        },
      },
    },
  })],
};