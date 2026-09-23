import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// System sets initial value.
// App subscribes to system color mode changes.
const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

// Palette: sea-glass paper, ink blue text, squid pink accent.
const theme = extendTheme({
  config,
  fonts: {
    heading: `"Homemade Apple", "Segoe Print", cursive`,
    body: `"Atkinson Hyperlegible", system-ui, sans-serif`,
  },
  semanticTokens: {
    colors: {
      paper: { default: "#e9f0ec", _dark: "#0f1a22" },
      panel: { default: "#f7faf8", _dark: "#172631" },
      ink: { default: "#1b2b3a", _dark: "#e4ecea" },
      muted: { default: "#4d6072", _dark: "#9fb3bf" },
      squid: { default: "#a83a63", _dark: "#f08fb0" },
      line: { default: "#1b2b3a", _dark: "#e4ecea" },
    },
  },
  styles: {
    global: {
      body: { bg: "paper", color: "ink", lineHeight: 1.65 },
      a: { color: "squid" },
      "a:focus-visible, button:focus-visible": {
        outline: "3px solid",
        outlineColor: "squid",
        outlineOffset: "2px",
      },
    },
  },
  components: {
    Heading: {
      baseStyle: { fontWeight: 400, lineHeight: 1.4 },
    },
  },
});

export default theme;
