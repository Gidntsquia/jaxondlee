import { Center, GridItem, Heading, SimpleGrid } from "@chakra-ui/react";

const IntroVideo = () => {

    return (
    <SimpleGrid columns={{ base: 2, md: 1 }} spacing={5} px={5} pt={3}>
    <GridItem>
        <Heading id="Intro Video" marginBottom={3}>Intro Video</Heading>
    </GridItem>            
    <GridItem alignItems={"center"}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/IZnvY2Lq9hg?si=bWGWked6OU_1efgj" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </GridItem>
    </SimpleGrid>
  );
};

export default IntroVideo;
