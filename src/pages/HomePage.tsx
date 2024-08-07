import { Grid, GridItem } from "@chakra-ui/react";
import HeaderOverlay from "../components/home/HeaderOverlay";
import ProjectsGrid from "../components/home/projects/ProjectsGrid";
import SkillStack from "../components/home/skills/SkillStack";
import About from "../components/home/About";

const HomePage = () => {
    return (
        <Grid>
            <GridItem>
                <HeaderOverlay />
            </GridItem>
            <GridItem px={5} pt={5}>
                <SkillStack />
            </GridItem>
            <GridItem px={5} pt={5}>
                <ProjectsGrid />
            </GridItem>
            <GridItem px={5} pt={5}>
                <About />
            </GridItem>
        </Grid>
    );
};

export default HomePage;
