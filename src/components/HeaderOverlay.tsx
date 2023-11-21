import { Box, Center, Container, useMediaQuery } from "@chakra-ui/react";
import jaxonSanFran from "../assets/jaxon.png";
import CloudTextDynamic from "./CloudTextDynamic";

const HeaderOverlay = () => {
  // single media query with no options
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  return (
    <Container maxW="100vw" p={0}>
      <Box
        minHeight="800px"
        position="relative"
        bgImage={jaxonSanFran}
        bgSize="cover"
        bgPosition="bottom right"
        bgRepeat="no-repeat"
        left={0}
        right={0}
      >
      </Box>
    </Container>
  );
};

export default HeaderOverlay;
