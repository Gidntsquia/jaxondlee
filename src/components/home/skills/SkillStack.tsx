import { Button, Heading } from "@chakra-ui/react";
import Skill from "../../../entities/Skill";
import skills from "../../../data/skills";
import useData from "../../../hooks/useData";
import useFilterStore from "../../../stores/filterStore";

const SkillStack = () => {
  const { data } = useData<Skill>(skills);
  const { currParams, addParam, removeParam } = useFilterStore();

  return (
    <>
      <Heading id="Skills" marginBottom={3}>
        Skills
      </Heading>
      {data.map((s) => (
        <Button
          onClick={() =>
            currParams.includes(s.slug) ? removeParam(s.slug) : addParam(s.slug)
          }
          variant={currParams.includes(s.slug) ? "solid" : "outline"}
          bg={currParams.includes(s.slug) ? "ink" : "transparent"}
          color={currParams.includes(s.slug) ? "paper" : "ink"}
          borderColor="line"
          key={s.slug}
          marginRight={2}
          marginBottom={1}
        >
          {s.title}
        </Button>
      ))}
    </>
  );
};

export default SkillStack;
