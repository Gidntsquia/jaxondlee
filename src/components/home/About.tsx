import { GridItem, Heading, SimpleGrid, Text } from "@chakra-ui/react";

const About = () => {

    return (
    <SimpleGrid columns={{ base: 2, md: 1 }} spacing={5} px={5} pt={3}>
    <GridItem>
        <Heading id="About" marginBottom={3}>About</Heading>
    </GridItem>            
    <GridItem>
        <Text>👋 Hi, I'm Jaxon Lee. I'm a 3rd year Computer Science student at the University of Maryland. This is my technical portfolio. You can click on any of my projects to read what they show about me. And, if you want, you can click my skills to see which projects use each one. I made this portfolio to succintly demonstrate my programming capabilities. I'm searching for a job in software engineering, app development, or game programming. You can reach me at jaxondlee@gmail.com.</Text>                    
    </GridItem>
    </SimpleGrid>
  );
};

export default About;
