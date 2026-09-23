import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

// Plain neutrals, one accent. Default system font.
const theme = extendTheme({
  config,
  fonts: {
    heading: `system-ui, -apple-system, "Segoe UI", sans-serif`,
    body: `system-ui, -apple-system, "Segoe UI", sans-serif`,
  },
  semanticTokens: {
    colors: {
      paper: { default: "#ffffff", _dark: "#141414" },
      panel: { default: "#ffffff", _dark: "#141414" },
      ink: { default: "#1a1a1a", _dark: "#eaeaea" },
      muted: { default: "#5c5c5c", _dark: "#a0a0a0" },
      squid: { default: "#b03a5b", _dark: "#e88ba6" },
      line: { default: "#d9d9d9", _dark: "#333333" },
    },
  },
  styles: {
    global: {
      body: { bg: "paper", color: "ink", lineHeight: 1.6 },
      a: { color: "inherit" },
    },
  },
  components: {
    Heading: { baseStyle: { fontWeight: 600 } },
  },
});

export default theme;
