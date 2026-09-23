import { Box, Heading, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import useData from "../hooks/useData";
import playlists from "../data/playlists";
import Playlist from "../entities/Playlist";

export const PlaylistsPage = () => {
  const { data } = useData<Playlist>(playlists);
  return (
    <Box
      justifyContent={"center"}
      alignItems={"center"}
      display={"grid"}
      mt={5}
    >
      {data.map((playlist) => (
        <LinkBox
          key={playlist.title}
          borderWidth="2px"
          borderColor="line"
          rounded="lg"
          boxShadow="4px 4px 0 var(--chakra-colors-line)"
          maxW="sm"
          m="2"
          bgColor="#1DB954"
          textColor={"#191414"}
        >
          <Heading size="md" mt="2" mx="2">
            <LinkOverlay href={playlist.url} target="_blank" rel="noopener">
              {playlist.title}
            </LinkOverlay>
          </Heading>
          <Text mb="2" mx="2">
            {playlist.description}
          </Text>
        </LinkBox>
      ))}
    </Box>
  );
};
