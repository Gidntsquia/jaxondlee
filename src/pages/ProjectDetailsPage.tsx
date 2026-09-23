import {
  Button,
  GridItem,
  HStack,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import LinkIcons from "../components/home/projects/LinkIcons";
// import NavigationButtons from "../components/NavigationButtons";
import projects from "../data/projects";
import Project from "../entities/Project";
import useDataPoint from "../hooks/useDataPoint";
import Skill from "../entities/Skill";
import skills from "../data/skills";
import DefinitionItem from "./DefinitionItem";
// import useIndex from "../hooks/useIndex";

const ProjectDetailsPage = () => {
  const { slug } = useParams();
  const project = useDataPoint<Project>(projects, slug!)!;
  // const index = useIndex<Project>(projects, slug!)!;
  // const prev =
  //   projects[
  //     (((index - 1) % projects.length) + projects.length) % projects.length
  //   ];
  // const next =
  //   projects[
  //     (((index + 1) % projects.length) + projects.length) % projects.length
  //   ];

  return (
    
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} px={5} pt={6} maxW="1100px" mx="auto">
      <GridItem>
        <HStack justifyContent="left">
          <Heading>{project.name}</Heading>
          <LinkIcons docs={project.docs} url={project.url} />
        </HStack>
         <Text maxW="60ch" my={4} style={{ whiteSpace: 'pre-line' }}>{project.description}</Text>
        <DefinitionItem term="Skills">
          <HStack flexWrap="wrap">
            {project.skills?.map((s) => (
              <Button size={"sm"} variant="outline" borderColor="line" key={s}>
                {useDataPoint<Skill>(skills, s)?.title}
              </Button>
            ))}
          </HStack>
        </DefinitionItem>
      </GridItem>
      {project.image && (
        <GridItem>
          <Link isExternal href={project.url}>
            <Image src={project.image} alt={project.name} objectFit="cover" border="1px solid" borderColor="line" borderRadius="md" />
          </Link>
        </GridItem>
      )}
      {/* <GridItem colSpan={{ base: 1, md: 2 }}>
        <NavigationButtons
          prevSlug={prev.slug}
          prevName={prev.name}
          nextSlug={next.slug}
          nextName={next.name}
        />
      </GridItem> */}
    </SimpleGrid>
  );
};

export default ProjectDetailsPage;
