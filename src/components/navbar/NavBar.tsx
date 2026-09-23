import { Flex, HStack, Icon, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import { GiSquid } from "react-icons/gi";
import { HashLink } from "react-router-hash-link";

export const navBarHeight = "60px";

const NavBar = () => {
  const scrollWithOffset = (el: HTMLElement) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset });
  };

  return (
    <Flex
      as="header"
      position="fixed"
      bg="panel"
      color="ink"
      borderBottom="2px solid"
      borderColor="line"
      w="100%"
      zIndex="200"
      justifyContent="center"
      height={navBarHeight}
    >
      <HStack justifyContent="space-around" width="50%">
        <HashLink to="/#top" reloadDocument>
          <Icon
            as={GiSquid}
            aria-label="Jaxon Lee, back to top"
            color="squid"
            maxWidth="none"
            boxSize="44px"
            objectFit="fill"
            verticalAlign="middle"
          />
        </HashLink>
        <HashLink to="/#projects" scroll={scrollWithOffset}>
          <Text>Projects</Text>{" "}
        </HashLink>
        <ColorModeSwitch />
      </HStack>
    </Flex>
  );
};

export default NavBar;
