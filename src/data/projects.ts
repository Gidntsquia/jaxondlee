import Project from "../entities/Project";

const projects: Project[] = [
    {
        name: "T.U.F.F.",
        description:
            'I analyzed tension data collected from a upper-atmosphere research balloon to track air resistance. The data was collected from my "payload," which was a 1.5 lb box with sensors, an arduino, and an SD card inside. The Balloon Payload Program club at UMD flew it as a part of their bi-semesterly launches. I used the analyis I did here to write a research paper on T.U.F.F.\n\nThis shows a basic proficiency with Python and Jupyter Notebook. It also demonstrates my ability to independently extract conclusions from data. It also shows my commitment to documentation and proper coding style, which can be seen on the GitHub page.',
        shortDescription: "Data analysis on weather balloon data",
        image: "/TuffBalloonLaunch.jpg",
        slug: "tuff",
        docs: "https://github.com/UMDBPP/TUFFcode",
        startDate: "2021",
        endDate: "2022",
        isCurrent: false,
        skills: ["python"],
    },
    {
        name: "Got Steam, Punk?",
        description:
            'I crafted a 3D single-player experience in Unity using C#. I programmed this game with a team of friends for a game jam. In the game, you act as the lone sailor keeping the ship afloat during a pirate attack. If you don\'t do things quickly, the ship will build up "steam" and explode. You can play by clicking the picture on the right; the controls are WASD for movement, left click for a hook shot, and E to complete a task.\n\nThis shows my expertise in C# and Unity game development. Further, it demonstrates my ability to work with a team to finish a product. Finally, it makes my commitment to documentation and proper coding style clear, which can be seen on the GitHub page.',
        shortDescription: "3D resource management game",
        image: "/GotSteamPunk.png",
        slug: "steam",
        url: "https://tarrott.itch.io/got-steam-punk",
        docs: "https://github.com/Gidntsquia/GotSteamPunk",
        startDate: "2021",
        endDate: "2021",
        isCurrent: false,
        skills: ["csharp"],
    },
    {
        name: "Advent of Code 2022",
        description:
            'I solved daily coding challenges from December 1st to December 13th in Python. This is a collection of my answers. This was part of a for-fun "Advent of Code" competition, where hackers solve small problems as quickly as possible. \n\nThis reveals my proficiecy with complex Python algorithms and ability to program quickly. It also illustrates my joy for coding. Finally, it establishes my commitment to documentation and proper coding style, which can be seen on the GitHub page. ',
        shortDescription: "Solutions for annual coding challenge",
        image: "/AdventOfCode.jpg",
        slug: "advent2022",
        docs: "https://github.com/Gidntsquia/AdventOfCode",
        startDate: "2022",
        endDate: "2022",
        isCurrent: false,
        skills: ["python"],
    },
    {
        name: "ScheduleTerp",
        description: "",
        shortDescription: "College course selection helper",
        image: "/ScheduleTerp_logo.png",
        slug: "scheduleTerpWeb",
        docs: "https://schedule-terp.vercel.app/",
        startDate: "2023",
        endDate: "2023",
        isCurrent: false,
        skills: ["react"],
    },
    {
        name: "Flood Escape",
        description: "Click the image on the right to play!",
        shortDescription: "Exploration-based puzzle game",
        image: "/flood_escape.jpg",
        slug: "floodEscape",
        url: "https://gidntsquia.itch.io/flood-escape",
        docs: "https://github.com/pvilimas/puzzle-game",
        startDate: "2023",
        endDate: "2023",
        isCurrent: false,
        skills: ["csharp"],
    },
    {
        name: "Satan Has More Islands",
        description: "Click the image on the right to play!",
        shortDescription: "Humorous clicker game",
        image: "/Satan_has_more_islands_thumbnail.jpg",
        slug: "moreIslands",
        url: "https://gidntsquia.itch.io/satan-has-more-islands",
        docs: "https://github.com/Gidntsquia/Make-More-Islands",
        startDate: "2024",
        endDate: "2024",
        isCurrent: false,
        skills: ["csharp"],
    },
];

export default projects;
