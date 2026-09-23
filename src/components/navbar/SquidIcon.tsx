import { Icon, IconProps } from "@chakra-ui/react";

// Simple hand-drawn-style squid: pointed mantle on top, two fins, eyes, tentacles below.
const SquidIcon = (props: IconProps) => (
  <Icon viewBox="0 0 48 48" {...props}>
    <g fill="currentColor">
      <path d="M24 2 C31 9 33 18 31 27 L17 27 C15 18 17 9 24 2 Z" />
      <path d="M21 12 L9 17 L20 22 Z" />
      <path d="M27 12 L39 17 L28 22 Z" />
    </g>
    <g fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
      <path d="M18 29 C17 36 14 40 12 45" />
      <path d="M22 29 C22 36 21 41 20 46" />
      <path d="M26 29 C26 36 27 41 28 46" />
      <path d="M30 29 C31 36 34 40 36 45" />
    </g>
    <circle cx="20.5" cy="24" r="1.7" fill="var(--chakra-colors-paper)" />
    <circle cx="27.5" cy="24" r="1.7" fill="var(--chakra-colors-paper)" />
  </Icon>
);

export default SquidIcon;
