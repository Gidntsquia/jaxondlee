import { HStack, Icon, Link } from "@chakra-ui/react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { IconType } from "react-icons";
import useData from "../hooks/useData";
import socials from "../data/socials";
import Social from "../entities/Social";

const SocialsIcons = () => {
  const { data } = useData<Social>(socials);

  const iconMap: { [key: string]: IconType } = {
    github: FaGithub,
    linkedin: FaLinkedin,
    email: FaEnvelope,
    facebook: FaFacebook,
    twitter: FaTwitter,
    youtube: FaYoutube,
  };

  return (
    <HStack justifyContent="center">
      {data.map((social) => (
        <Link
          href={social.url}
          isExternal
          target="_blank"
          rel="noopener"
          key={social.slug}
        >
          <Icon as={iconMap[social.slug]} boxSize={"60px"} color={"gray.500"} />
        </Link>
      ))}
    </HStack>
  );
};

export default SocialsIcons;
