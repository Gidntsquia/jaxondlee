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
import { PLACEHOLDER_IMAGE } from "../../../constants/settings";
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
      border="2px solid"
      borderColor="line"
      borderRadius="6px 14px 8px 12px"
      boxShadow="4px 4px 0 var(--chakra-colors-line)"
      _hover={{ boxShadow: "6px 6px 0 var(--chakra-colors-squid)" }}
      transition="box-shadow .15s"
      as={Card}
      overflow="hidden"
    >
      <AspectRatio ratio={16 / 9} borderBottom="2px solid" borderColor="line">
        <Image
          src={project.image || PLACEHOLDER_IMAGE}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = PLACEHOLDER_IMAGE;
          }}
          alt={project.name}
          objectFit="cover"
        />
      </AspectRatio>
      <CardBody>
        <HStack justifyContent="space-between">
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
            bg={currParams.includes(s) ? "squid" : "transparent"}
            color={currParams.includes(s) ? "paper" : "ink"}
            borderColor="line"
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
