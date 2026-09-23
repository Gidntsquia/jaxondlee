import { Icon, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Icon
      as={colorMode === "dark" ? FaSun : FaMoon}
      onClick={toggleColorMode}
      boxSize="22px"
      cursor="pointer"
      role="button"
      tabIndex={0}
      aria-label="Switch light or dark mode"
      onKeyDown={(e: React.KeyboardEvent) => (e.key === "Enter" || e.key === " ") && toggleColorMode()}
    />
  );
};

export default ColorModeSwitch;
