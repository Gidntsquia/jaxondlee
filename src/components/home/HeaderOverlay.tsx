import { Box, Container } from "@chakra-ui/react";
import {
  BACKGROUND_IMAGE,
  BACKGROUND_IMAGE_POSITION,
} from "../../constants/settings";

const HeaderOverlay = () => {

  return (
    <Container maxW="100vw" p={0}>
      <Box
        minHeight="400px"
        position="relative"
        bgImage={BACKGROUND_IMAGE}
        backgroundColor="rgba(23, 
          50, 87, 0.4)"
        bgSize="cover"
        bgPosition={BACKGROUND_IMAGE_POSITION}
        bgRepeat="no-repeat"
        left={0}
        right={0}
      >
      </Box>
    </Container>
  );
};

export default HeaderOverlay;
