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
    
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} px={5} pt={3}>
      <GridItem>
        <HStack justifyContent="left">
          <Heading>{project.name}</Heading>
          <LinkIcons docs={project.docs} url={project.url} />
        </HStack>
         <Text style={{ whiteSpace: 'pre-line' }}>{project.description}</Text>
        <DefinitionItem term="Skills">
          <HStack>
            {project.skills?.map((s) => (
              <Button size={"sm"} color="gray.650">
                {useDataPoint<Skill>(skills, s)?.title}
              </Button>
            ))}
          </HStack>
        </DefinitionItem>
      </GridItem>
      <GridItem>
        <Link isExternal href={project.url}>
          <Image src={project.image} objectFit="cover" />
        </Link>
      </GridItem>
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
