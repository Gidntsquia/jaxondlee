import {
  LinkBox,
  Card,
  CardBody,
  Heading,
  LinkOverlay,
  Text,
  Image,
  AspectRatio,
  HStack,
  Button,
} from "@chakra-ui/react";
import Project from "../../../entities/Project";
import LinkIcons from "./LinkIcons";
import useDataPoint from "../../../hooks/useDataPoint";
import skills from "../../../data/skills";
import Skill from "../../../entities/Skill";
import useFilterStore from "../../../stores/filterStore";

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  const { currParams, addParam, removeParam } = useFilterStore();

  return (
    <LinkBox
      key={project.slug}
      bg="panel"
      border="1px solid"
      borderColor="line"
      borderRadius="md"
      boxShadow="none"
      _hover={{ borderColor: "muted" }}
      as={Card}
      overflow="hidden"
      h="100%"
    >
      {project.image && (
        <AspectRatio ratio={16 / 9} borderBottom="1px solid" borderColor="line">
          <Image src={project.image} alt={project.name} objectFit="cover" />
        </AspectRatio>
      )}
      <CardBody>
        <HStack justifyContent="space-between" pt={project.image ? 0 : 1}>
          <Heading size="sm" my="2">
            <LinkOverlay href={`/projects/${project.slug}`} />
            {project.name}
          </Heading>
          <LinkIcons docs={project.docs} url={project.url} size="25px" />
        </HStack>
        <Text color="muted" mb={2}>{project.shortDescription}</Text>
        {project.skills?.map((s) => (
          <Button
            variant={currParams.includes(s) ? "solid" : "outline"}
            bg={currParams.includes(s) ? "ink" : "transparent"}
            color={currParams.includes(s) ? "paper" : "ink"}
            borderColor="line"
            fontWeight={400}
            key={s}
            onClick={() =>
              currParams.includes(s) ? removeParam(s) : addParam(s)
            }
            size={"sm"}
            marginRight={2}
            marginBottom={1}
          >
            {useDataPoint<Skill>(skills, s)?.title}
          </Button>
        ))}
      </CardBody>
    </LinkBox>
  );
};

export default ProjectCard;
